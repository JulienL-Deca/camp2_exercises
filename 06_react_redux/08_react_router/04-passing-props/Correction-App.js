// App.js
import React, { Component } from 'react';
import "./App.css";
import {
  Route,
  NavLink
} from 'react-router-dom';
import Home from "./Home";
import Article from "./Article";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/article/42">Article 42</NavLink></li>
          <li><NavLink to="/article/1337">Article 1337</NavLink></li>
        </ul>

        <Route exact path="/" component={Home} />
        <Route path="/article/:articleId" render={routerProps =>
          <Article
            {...routerProps}
            author={
              {firstname: "Vincent", lastname: "Billey"}
            }
            datePublished="today"
          />
        }/>
      </div>
    )
  }
}

export default App;
