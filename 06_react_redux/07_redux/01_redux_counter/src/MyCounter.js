import React from "react";
import { connect } from "react-redux";
import { addOne, removeOne } from './Actions'

function MyCounter(props) {
  console.log(props);
  return (
    <div>
      <button className="mybtn" onClick= {props.increment}>Add +1</button>
      <span>valeur compteur: {props.counterValue}</span>
      <button className="mybtn" onClick= {props.decrement}>Remove -1</button>
    </div>
  )
}

function mapStateToProps(reduxState){
  return {
    counterValue: reduxState
  };
}
function mapDispatchToProps(dispatch){
  return{
    increment: () => dispatch(addOne()),
    decrement: () => dispatch(removeOne())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCounter);
