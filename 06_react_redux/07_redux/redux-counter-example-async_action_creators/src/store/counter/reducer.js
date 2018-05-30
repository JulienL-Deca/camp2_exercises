
const initialState = {
  counter: 0,
  fetching: false
};

function counterReducer(state = initialState, action) {
  switch(action.type) {
    case "FETCHING":
      return {
        ...state,
        fetching: true
      }
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + action.incrementBy,
        fetching: false
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - action.decrementBy
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export default counterReducer;
