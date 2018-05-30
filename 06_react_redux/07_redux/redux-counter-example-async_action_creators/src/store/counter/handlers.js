import { increment, decrement, reset } from "./actions";
import { delayedIncrement } from "./asyncActions";

export function incrementDecrement(dispatch) {
  return {
    increment: () => dispatch(delayedIncrement(2)),
    decrement: () => dispatch(decrement())
  }
}

export function resetter(dispatch) {
  return {
    reset: () => dispatch(reset())
  }
}
