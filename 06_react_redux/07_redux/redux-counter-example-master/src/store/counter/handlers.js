export function incrementDecrement(dispatch) {
  return {
    increment: () => dispatch({type: "INCREMENT"}),
    decrement: () => dispatch({type: "DECREMENT"})
  }
}

export function resetter(dispatch) {
  return {
    reset: () => dispatch({type: "RESET"})
  }
}
