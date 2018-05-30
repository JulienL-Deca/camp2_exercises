import React, { Component } from "react";

class ChatBot extends Component {
  constructor(props) {
    super(props);
    this.sayHello = this.sayHello.bind(this);
    this.state = {
      messages: [],
      nbMsg: 0,
    };
  }
  componentDidMount() {
    this.setIntervalId = setInterval(this.sayHello, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.setIntervalId);
  }
  sayHello() {
    let nbMsgP1 = this.state.nbMsg + 1;
    let newMsg = "Hey there! ("+nbMsgP1+")"
    this.setState({
      nbMsg: nbMsgP1,
      messages: [...this.state.messages, newMsg ]
    });
  }
  render() {
    return (
      <div>
        {this.state.messages.map((message, index) =>
          <div key={index}>{message}</div>
        )}
      </div>
    )
  }
}

export default ChatBot;
