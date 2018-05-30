import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  Link
  } from 'react-router-dom';

const Home = () => (
<div>
  <h3>Home web route</h3>
</div>
)

const About = () => (
<div>
  <h3>About web route</h3>
</div>
)
const Articles = ({ match }) => (
<div>
  <h3>Articles web route</h3>
  <p>match.path : { match.path }</p>
  <p>match.url : { `${match.url}` }</p>

</div>
)
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          my links will follow
        </p>
        <hr />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/articles">Articles</Link></li>
        </ul>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/articles" component={Articles}/>
      </div>
    );
  }
}

export default App;
