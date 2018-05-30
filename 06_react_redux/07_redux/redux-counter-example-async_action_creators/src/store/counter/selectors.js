export function getCounter(reduxState) {
  return {
    counter: reduxState.counter
  };
}

export function isFetching(reduxState) {
  return {
    isFetching: reduxState.fetching
  }
}
