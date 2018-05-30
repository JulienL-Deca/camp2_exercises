import React, { Component } from 'react';
import './App.css';
import Book from "./Book"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isbn: "978059651774",
      isbn: "0385191952",
    }
  }
  handleChange = (event) => {
    this.setState({isbn: event.target.value});
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isbn !== this.props.isbn) {
      this.setState({isbn: this.props.isbn})
    }
  }
  handleSearch = () => {

  }
  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.isbn} onChange={this.handleChange} />
        <button onClick={this.handleSearch}>Search</button>
        <Book isbn={this.state.isbn} />
      </div>
    );
  }
}

export default App;
