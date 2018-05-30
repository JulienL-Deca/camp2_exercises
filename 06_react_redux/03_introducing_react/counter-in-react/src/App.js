import React, { Component } from 'react';
import './App.css';
import { Header, Intro } from './Header-Intro';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: "Julien"
    };
  }
  render() {
    return (
      <div>
        {console.log(this.state)}
        <Header />
        <Intro />
        <Compteur myName={this.state.playerName}/>
      </div>
    );
  }
}
class Compteur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mycount: 10
    };
  }
  addOne(props) {
    this.setState((prevState) => {
      return {mycount: prevState.mycount + 1}
    })
  }
  subOne() {
    this.setState((prevState) => {
      return {mycount: prevState.mycount - 1}
    })
  }
  resetCompteur(){
    this.setState({mycount: 0})
  }
  render() {
    return (
      <div className="myBtn Center">
        {console.log(this.props)}
        <p>Bonjour {this.props.myName}</p>
        <button className="myButton" onClick={() => this.addOne()}> + </button>
        <p> {this.state.mycount}</p>
        <button className="myButton" onClick={() => this.subOne()}> - </button>
        <hr />
        <button className="myButton" onClick={()=> this.resetCompteur()}>Reset</button>
      </div>
    )
  }
}


export default App;
