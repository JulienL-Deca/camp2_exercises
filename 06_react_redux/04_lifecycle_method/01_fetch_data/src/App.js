import React, { Component } from 'react';
import './App.css';

class DogApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      urlDog: "",
    };
  }
  getDogUrl(){
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
        <img src={this.state.urlDog} height="500" alt="a dog"></img>
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
