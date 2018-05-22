import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">1st project in React</h1>
        </header>
        <p className="App-intro">
          This is our 'Hello World'.
        </p>
      </div>
    );
  }
}

export default App;
