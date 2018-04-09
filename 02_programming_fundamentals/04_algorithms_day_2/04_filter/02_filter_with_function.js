// filter takes an array of integer and a function of filtering
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]
function isEven(element){
  return (element %2 === 0);
}
function isOdd(element){
  return (element %2 === 1);
}
function filter(array, fn) {
  // Your code here
  let myArray = [];
  if (array.length !== 0) {
    array.forEach(function(element){
      if (fn(element)) {
        myArray.push(element);
      }
    });
  }
  return myArray;
}
// do not remove this line, it is for tests
module.exports = filter;
