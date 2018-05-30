import { increment, decrement, reset } from "./actions";

export function incrementDecrement(dispatch) {
  return {
    increment: () => dispatch(increment(2)),
    decrement: () => dispatch(decrement())
  }
}

export function resetter(dispatch) {
  return {
    reset: () => dispatch(reset())
  }
}
