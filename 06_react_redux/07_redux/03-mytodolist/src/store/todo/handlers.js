import { addOneTodo, toggleTodoStatus, deleteOneTodo, reset, test } from './actions';

export const updateTodoList = (dispatch) => {
  return {
    addOneTodo: (name) => dispatch(addOneTodo(name)),
    toggleTodoStatus: (todo) => dispatch(toggleTodoStatus(todo)),
    deleteOneTodo: (todo) => dispatch(deleteOneTodo(todo)),
    reset: () => dispatch(reset()),
    test: () => dispatch(test())
  };
}
