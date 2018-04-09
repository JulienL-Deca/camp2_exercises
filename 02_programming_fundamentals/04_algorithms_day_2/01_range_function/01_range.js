// Write a function that takes two input parameters, and returns a new array with defaults values between the start
// number and the end number.
//
// This function should work in both ascending or descending order.

// Complete this function.
function range(nb1, nb2) {
  let myArrayOfNumber = [];
  if (nb1 < nb2) {
    for (let i = nb1; i <= nb2; i++) {
      myArrayOfNumber.push(i);
    }
  } else { // nb1 > nb2
    for (let i = nb1; i >= nb2; i--) {
      myArrayOfNumber.push(i);
    }
  }
  return myArrayOfNumber;
}

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = range;
