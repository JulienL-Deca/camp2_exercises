// Add a function `introduceMyself` which takes no arguments and return a little introductory sentence
//
// Example
//
// person.introduceMyself() # => "Hello! I'm Abdel Sadki and I'm 42"
const person = {
  firstname: "Abdel",
  lastname: "Sadki",
  age: 42,
  fullname: function() {
    return `${this.firstname} ${this.lastname}`;
  },
  introduceMyself: function() {
    // Your code here
    return `Hello! I'm ${this.fullname()} and I'm ${this.age}`;
  },
  growthAge: function(age) {
    // Your code here
    this.age = this.age + 1;
    return this;
  }
};

module.exports = person;
