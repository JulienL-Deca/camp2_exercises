
const initialState = 0;

function counterReducer(state = initialState, action) {
  switch(action.type) {
    case "INCREMENT":
      return state + action.incrementBy;
    case "DECREMENT":
      return state - action.decrementBy;
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export default counterReducer;
