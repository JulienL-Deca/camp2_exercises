import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  NavLink,
  Switch
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
const User = ({ match }) => (
<div>
  {console.log(match)}
  <h3>User web route</h3>
  {
    (match.params.userId === "Julien")
      ? <p>Bonjour {match.params.userId}</p>
      : <p>Bonjour autre utilisateur ! ({match.params.userId})</p>
  }
  <p>match.path : { match.path }</p>
  <p>match.url : { match.url }</p>

</div>
)
const NoMatch = () => (
  <div>This is the no match component !</div>
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
          Switch tests will go here
        </p>
        <hr />
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/user/:userId">User</NavLink></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/user/:userId" component={User}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    );
  }
}

export default App;
