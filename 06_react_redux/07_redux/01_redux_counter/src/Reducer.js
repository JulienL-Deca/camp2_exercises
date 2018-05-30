const initialState = 10;

function counterRedux(state = initialState, action){
  switch (action.type) {
    case "ONE_UP":
      return  state + 1;
    case "ONE_DOWN":
      return state - 1;
    default:
      return state;
  }
}
export default counterRedux;
