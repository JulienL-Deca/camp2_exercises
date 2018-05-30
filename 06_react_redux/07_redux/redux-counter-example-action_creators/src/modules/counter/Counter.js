import React, { Component } from "react";
import { connect } from "react-redux";
import { getCounter } from "../../store/counter/selectors";
import { incrementDecrement } from "../../store/counter/handlers";

class Counter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.decrement}>-</button>
        <span>{this.props.counter}</span>
        <button onClick={this.props.increment}>+</button>
      </div>
    )
  }
}


export default connect(getCounter, incrementDecrement)(Counter);
