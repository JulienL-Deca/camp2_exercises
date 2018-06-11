import React from "react";
import { connect } from "react-redux";
import { getTodoList } from "../store/todo/selectors";
import { updateTodoList } from "../store/todo/handlers";

export function TodoHead(props) {
  return (
    <div>
      <h1 className="todoHead">
        Hy! You have {props.todoList.todoList.length} todo!
        <button onClick={props.test}> (populate with test data) </button>
      </h1>
    </div>
  );
}

export default connect(getTodoList, updateTodoList)(TodoHead);
