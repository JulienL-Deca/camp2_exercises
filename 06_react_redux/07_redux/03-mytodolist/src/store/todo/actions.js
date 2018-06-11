export const addOneTodo = (todo) => (
  {type: "ADD", todo: todo}
);

export const toggleTodoStatus = (todo) => (
  {type: "TOGGLE", id: todo.id}
);

export const deleteOneTodo = (todo) => (
  {type: "DELETE", id: todo.id}
)
export const reset = () => (
  {type: "RESET"}
)
export const test = () => (
  {type: "TEST"}
)
