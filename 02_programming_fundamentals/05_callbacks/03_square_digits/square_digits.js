// Your task is to square **EACH** digit of a number via a squareDigits function.
//
// squareDigits(9) === 81
// squareDigits(9129) === 811481
// squareDigits(99) === 8181
//
// Note: This is not just the square of a number but the square of each digits
// Note: The function accepts an integer and returns an integer
function squareDigits(number) {
  // Your code here
  if (number) {
    const digits =
      number
        .toString()
        .split("")
        .map((digitString) => parseInt(digitString, 10))
        .map((digit) => digit * digit)
        .join("");

    return parseInt(digits, 10);
  } else {
    //console.log(`dans false ${number}`);
  }

}
/*
function squareDigits(number) {
  // Your code here
  if (number) {
    const numberString = number.toString();
    const digits =
      numberString
        .split("")
        .map((digitString) => parseInt(digitString, 10));
    const digitsSquared = digits.map((digit) => digit * digit);

    const digitsJoined = digitsSquared.join("");

    return parseInt(digitsJoined, 10);
  } else {
    //console.log(`dans false ${number}`);
  }

}
*/
/* fonctionne pour un argument avec 1 seul chiffre et qui gère si on ne donne pas de chiffre
function squareDigits(number) {
  // Your code here
  let newString = "", tempString = "", tempValue = 0;
  if (number) {
    number.toString();
    tempValue = square(number);
    tempString += tempValue.toString();

    newString = tempString;

  } else {
    //console.log(`dans false ${number}`);
  }
  return newString;
}
*/
// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = squareDigits;
