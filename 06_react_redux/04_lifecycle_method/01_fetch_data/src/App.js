import React, { Component } from 'react';
import './App.css';

class RefreshButton extends Component{
  render(){
    return (
      <button className="btn" onClick={this.props.Refresh} >Display another dog!</button>
    )
  }
}
class DogApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      urlDog: "",
    };
  }
  getDogUrl= () => {
    fetch('https://random.dog/woof.json')
    .then(response => response.json())
    .then(myJson => this.setState({urlDog: myJson.url}));
  }
  componentDidMount(){
    this.getDogUrl();
  }

  render() {
    return (
      <div className="App">
        {console.log(this.state.urlDog)}
        {
          this.state.urlDog.endsWith("mp4") ? <video height="400" autoplay='true' controls src={this.state.urlDog} />
          : <img src={this.state.urlDog} height="400" alt="a dog"></img>
        }
        <h3>{this.state.urlDog}</h3>
        <RefreshButton Refresh={this.getDogUrl} />
      </div>
    );
  }
}

export default DogApp;
/*
<video width="320" height="240" controls>
  <source src={this.state.urlDog} type="video/mp4" />
  Your browser does not support the video tag.
</video>
fetch https://random.dog/woof.json
on obtient
{
"url": "https://random.dog/9826-9348-20028.jpg"
}
et on fetch l'url de la clé "url"
 */
