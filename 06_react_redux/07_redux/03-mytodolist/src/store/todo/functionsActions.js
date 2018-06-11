export const addOneTodo = (todoList, todo) => [...todoList, todo];

export const toggleTodoStatus = (todoList, id) =>
  todoList.map((oneTodo) =>
    oneTodo.id === id
    ? {...oneTodo, done: !oneTodo.done}
    : oneTodo
  );

export const deleteOneTodo = (todoList, id) =>
  todoList.filter((todo) => todo.id !== id);
