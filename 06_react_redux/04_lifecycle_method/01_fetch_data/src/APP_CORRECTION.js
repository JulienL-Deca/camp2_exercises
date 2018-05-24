import React, { Component } from 'react';
import './App.css';

function fetchDog() {
  return fetch('https://random.dog/woof.json')
  .then(data => data.json());
}



class DogApp extends Component {
  constructor(props) {
    super(props);
    this.state = {url: null};
  }
  componentDidMount() {
    this.refreshDog();
  }

  refreshDog = () => {
    return fetchDog()
      .then(data => this.setState({url : data.url}))
  }

  render() {
    return (

      <div className="App">
        <button onClick={this.refreshDog}>Click here</button>
        <div>
          {this.state.url
            ? <img src={this.state.url} />
            : null
          }
        </div>
      </div>
    );
  }
}

export default DogApp;
