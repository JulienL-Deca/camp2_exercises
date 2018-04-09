// filter takes an array of integer and a string with either odd or even
// such as filter([1, 2, 3, 4, 5], 'even') returns [2, 4]
function filter(array, str) {
  // Your code here
  let myArray = [];
  if (str === "even" || str === "odd") {
    array.forEach(function(element) {
      if (str === "odd" && element %2 === 1) {
        myArray.push(element);
      }else
      if (str === "even" && element %2 === 0) {
        myArray.push(element);
      }
    });
    return myArray;
  } else {
    return array;
  }
}

// do not remove this line, it is for tests
module.exports = filter;
