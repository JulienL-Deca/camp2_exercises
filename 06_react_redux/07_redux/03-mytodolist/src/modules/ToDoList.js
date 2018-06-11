import React from "react";
import { connect } from "react-redux";
import { getTodoList } from "../store/todo/selectors";
import { updateTodoList } from "../store/todo/handlers";

export function TodoList(props) {
  return (
    <div className="todoList">
      {/* {console.log(props.todoList.todoList)} */}
      <table className="todoItem">
        <thead align="center">
          <tr>
            <th>#</th>
            <th>Todo title</th>
            <th>Status</th>
          </tr>
        </thead>
        <OneTodo todolist={props.todoList.todoList}/>
      </table>
    </div>
  );
}

function OneTodo(props){
  return(
      <tbody align="center">
        {props.todolist.map((oneTodo, index) => {
          return(
            <tr>
              <td key={index}>{oneTodo.id}</td>
              <td>{oneTodo.title}</td>
              <td>{oneTodo.done}</td>
            </tr>
          )
        })
        }
      </tbody>
    )
  }


export default connect(getTodoList, updateTodoList)(TodoList);
