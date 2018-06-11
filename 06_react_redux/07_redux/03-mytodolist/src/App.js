import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoHead from './modules/TodoHead';
import TodoList from './modules/ToDoList';
import TodoFoot from './modules/TodoFoot';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My to-do list</h1>
        </header>
        <p className="App-intro">
          AJouter une tâche à ma todo !
        </p>
        <hr></hr>
        <TodoHead />
        <TodoList />
        <TodoFoot />
      </div>
    );
  }
}

export default App;
