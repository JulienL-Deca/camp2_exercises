const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const integer2Find = Math.floor(Math.random()*100);
const firstQuestion2Ask = `Give me a number ? (${integer2Find}) : `;

function recurseUntilFindNumber(question) {
  reader.question(question, suppliedNumber => {
    if (isNaN(suppliedNumber)) {
      recurseUntilFindNumber("This was not a number\n");
    } else if (suppliedNumber < 1 || suppliedNumber > 100) {
      recurseUntilFindNumber("The number is between 1 and 100\n");
    }else if (suppliedNumber < integer2Find) {
      recurseUntilFindNumber("Too low\n");
    }else if (suppliedNumber > integer2Find) {
      recurseUntilFindNumber("Too high\n");
    } else {
      console.log("You won!");
      reader.close();
    }
  });
}

recurseUntilFindNumber(firstQuestion2Ask);
