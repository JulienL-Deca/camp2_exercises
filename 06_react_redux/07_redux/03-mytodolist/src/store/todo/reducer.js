import { addOneTodo, toggleTodoStatus, deleteOneTodo } from './functionsActions';

const testState = {
  todoList: [
    {id: 1, title: "1st todo is done", done: true},
    {id: 2, title: "2nd todo is acive", done: false},
    {id: 3, title: "3rd todo also finished", done: true},
    {id: 4, title: "4th todo : go for it", done: false}
  ]
};
const resetState = {
  todoList: [
  ]
};

function todoReducer(state = testState, action){
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todoList: addOneTodo(state.todoList, action.todo)
      };
    case "TOGGLE":
      return {
        ...state,
        todoList: toggleTodoStatus(state.todoList, action.id)
      };
    case "DELETE":
      return {
        ...state,
        todoList: deleteOneTodo(state.todoList, action.id)
      }
    case "RESET":
      return resetState;
    case "TEST":
      return testState;
    default:
        return state;
  }
}

export default todoReducer;
