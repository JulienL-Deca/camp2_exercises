import { fetching, increment } from "./actions";

export function delayedIncrement(incrementBy) {
  return dispatch => {
    dispatch(fetching());
    setTimeout(() =>
      dispatch(increment(incrementBy)),
      1000
    );
  }
}
