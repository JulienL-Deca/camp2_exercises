/*
This function uses destructuring for argument parsing. But it has a problem: it crashes when the caller passes an option object without an enable property. Since all options have defaults, we'd like to not crash in this case. Can you think of a clean way to fix this problem?
*/
function go(options = {}) {
  let {
    speed = 4,
    enable: { hyperdrive = false, frobnifier = true} = {}
    // enable: { hyperdrive = false, frobnifier = true} = {hyperdrive: true, frobnifier: false}
  } = options;

  console.log("speed=", speed, "hyperdrive:", hyperdrive, "frobnifier:", frobnifier);
}

go({ speed: 5 });
go();
//http://www.jstips.co/en/javascript/use-destructuring-in-function-parameters/
// go({ speed: 5, enable: {hyperdrive: true, frobnifier: false} });

/*
It would be nice to be able to call our lastIndexOf function without providing the third argument, and have it default to starting at the end of the array. It would be even nicer if we could express this with an ES6 default argument value. Can we?
*/
function lastIndexOf(arr, elt, start = arr.length) {
  for (let i = start - 1; i >= 0; i--) {
    if (arr[i] === elt) {
      return i;
    }
  }

  return -1;
}

console.log(lastIndexOf([1, 2, 1, 2], 2));
console.log(lastIndexOf([1, 2, 1, 2], 2, 4));

/*
Simplify these two functions by using the spread syntax.
The first one, replace, replaces part of an array with elements from another array.
The second one, copyReplace, does the same, but creates a new array rather than modifying its argument.
*/
//version à corriger !
// function replace(array, from, to, elements) {
//   array.splice.apply(array, [from, to - from].concat(elements));
// }
// ==> .apply => permet
function replace(array, from, to, elements) {
  array.splice(from, to - from, ...elements);
}

let testArray = [1, 2, 100, 100, 6];
replace(testArray, 2, 4, [3, 4, 5]);
console.log(testArray);

//version à corriger !
// function copyReplace(array, from, to, elements) {
//   return array.slice(0, from).concat(elements).concat(array.slice(to));
// }
function copyReplace(array, from, to, elements) {
  // return array.slice(0, from).concat(elements).concat(array.slice(to));
  return [...array.slice(0, from), ...elements, ...(array.slice(to))];
}

console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]));
