import React, { Component } from "react";
import { connect } from "react-redux";
import { getCounter } from "../../store/counter/selectors";
import { incrementDecrement } from "../../store/counter/handlers";

function Counter(props) {
  return (
    <div>
      <button onClick={props.decrement}>-</button>
      <span>{props.counter}</span>
      <button onClick={props.increment}>+</button>
    </div>
  )
}


export default connect(getCounter, incrementDecrement)(Counter);
