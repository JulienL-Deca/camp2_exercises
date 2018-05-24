import React, { Component } from 'react';
import './App.css';
import Line from './Line';
import _ from 'underscore';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sorter: "decathlon_id",
      desc: false
    };
  }

  getProducts() {
    const prod = _.sortBy(this.props.products, this.state.sorter);
    return this.state.desc ? prod.reverse() : prod;
  }

  handleClick(newSorter) {
    this.setState({
      sorter: newSorter,
      desc: (newSorter === this.state.sorter) && !this.state.desc
    });
  }

  renderHeader() {
    return (
      <thead>
        <tr>
          <th onClick={() => this.handleClick("decathlon_id")}>decathlon_id</th>
          <th onClick={() => this.handleClick("title")}>title</th>
          <th onClick={() => this.handleClick("price")}>price</th>
        </tr>
      </thead>
    );
  }

  renderBody() {
    return (
      <tbody>
      {this.getProducts().map((product) => {
        return (
          <Line
            key={product.decathlon_id}
            decathlon_id={product.decathlon_id}
            title={product.title}
            price={product.price}
          />
        );
      })}
      </tbody>
    )
  }

  render() {
    return (
      <div className="App">
        <table>
          {this.renderHeader()}
          {this.renderBody()}
        </table>
      </div>
    );
  }
}

export default App;
