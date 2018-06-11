import React from "react";
import { connect } from "react-redux";
import { getTodoList } from "../store/todo/selectors";
import { updateTodoList } from "../store/todo/handlers";

export function TodoFoot(props) {
  return (
    <div>
      <button onClick={props.reset}> reset todolist ! </button>
    </div>
  );
}

export default connect(getTodoList, updateTodoList)(TodoFoot);
