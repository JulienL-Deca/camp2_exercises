import React, { Component } from 'react';
import './App.css';
import MyCounter from './MyCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Counter in react&redux
        </p>
        <hr/>
        <MyCounter />
      </div>
    );
  }
}

export default App;
