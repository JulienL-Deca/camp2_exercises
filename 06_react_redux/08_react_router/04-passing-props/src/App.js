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
const Article = ({ match }) => (
<div>
  {console.log("inside <Article : ")}
  {console.log(match)}

  <h3>Article</h3>
  <OldApp Author="Julien"/>
  <p>numéro de mon article {match.params.articleId}</p>
  <p>match.path : { match.path }</p>
  <p>match.url : { match.url }</p>
</div>
)
function SomeComponent(props) {
  return (
    <div>
      {Object.keys(props).map((prop, index) =>
        <div key={index}>{prop}</div>
      )}
    </div>
  );
}
function OldApp(props) {
  const someObject = {
    oneKey: 1,
    twoKey: 2,
    threeKey: 3
  };
  return (
    <div>
      {console.log("inside oldApp")}
      {console.log(props)}

      <SomeComponent {...someObject} {...props}/>
      <p>Author is: {props.Author}</p>
    </div>
  );
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome!</h1>
        </header>
        <p className="App-intro">
          Passing props !
        </p>
        <hr />
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/article/42">Article (42)</NavLink></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/article/:articleId" component={Article}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    );
  }
}
const NoMatch = () => (
  <div>This is the no match component !</div>
)
export default App;
