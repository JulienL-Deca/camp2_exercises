import React, { Component } from 'react';
import './App.css';
import Counter from "./modules/counter/Counter";
import { connect } from "react-redux";
import { resetter } from "./store/counter/handlers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <button onClick={this.props.reset}>reset</button>
        </header>
        <div>
          <Counter />
        </div>
      </div>
    );
  }
}

export default connect(null, resetter)(App);
