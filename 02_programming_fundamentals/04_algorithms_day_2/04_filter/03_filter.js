// filter takes an array of integer and a function of filtering by using an higher order function
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]
function isEven(numbers){
  let evenNumbers = [];
  numbers.forEach(function(element){
    if (element %2 === 0) {
      evenNumbers.push(element);
    }
  });
  return evenNumbers;
}
function isOdd(numbers){
  let oddNumbers = [];
  numbers.forEach(function(element){
    if (element %2 === 1) {
      oddNumbers.push(element);
    }
  });
  return oddNumbers;
}
function filter(array, fn) {
  // Your code here
  let myArray = array;
  myArray = array.filter(fn);
  return myArray;
}

// do not remove this line, it is for tests
module.exports = filter;
