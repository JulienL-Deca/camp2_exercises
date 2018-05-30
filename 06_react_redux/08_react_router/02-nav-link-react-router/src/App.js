import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  NavLink
} from 'react-router-dom'

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
const Article42 = ({ match }) => (
<div>
  <h3>Article 42 web route</h3>
  <p>match.path : { match.path }</p>
  <p>match.url : { `${match.url}` }</p>
</div>
)
const Article1337 = ({ match }) => (
<div>
  <h3>Article 1337 web route</h3>
  <p>match.path : { match.path }</p>
  <p>match.url : { `${match.url}` }</p>
</div>
)
const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <NavLink to={`${match.url}/rendering`}>
          Rendering with React
        </NavLink>
      </li>
      <li>
        <NavLink to={`${match.url}/components`}>
          Components
        </NavLink>
      </li>
      <li>
        <NavLink to={`${match.url}/props-v-state`}>
          Props v. State
        </NavLink>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
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
          Here is my navlink
        </p>
        <hr />
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="julien">About</NavLink></li>
          <li><NavLink to="/articles">Articles</NavLink></li>
          <li><NavLink to="/article/42">Articles 42</NavLink></li>
          <li><NavLink to="/article/1337">Articles 1337</NavLink></li>
          <li><NavLink to="/topics"
            activeStyle={{
              textDecoration: 'underline',
              backgroundColor: 'red',
              fontWeight: 'bold'
            }}
              >Topics</NavLink></li>
        </ul>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/articles" component={Articles}/>
        <Route path="/article/42" component={Article42}/>
        <Route path="/article/1337" component={Article1337}/>
        <Route path="/topics" component={Topics}/>
      </div>
    );
  }
}

export default App;
