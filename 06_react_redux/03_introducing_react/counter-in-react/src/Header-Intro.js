import React, { Component } from 'react';
import logo from './logo.svg';

export class Header extends Component {
  render() {
    return (
      <div className="App Center">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Counter in react</h1>
        </header>
      </div>
    )
  }
}
export class Intro extends Component {
  render() {
    return (
      <div className="App-intro Center">
        compteur + - 1
      </div>
    )
  }
}
