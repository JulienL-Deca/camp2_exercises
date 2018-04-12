// See Sparta courses for the exercise summary
const orangeTree = {
  height: 0, // (in cm)
  age: 0, // (in year)
  oranges: 0,
  alive: true,
  ageMax: 100,
  ageCouldBeginToDie: 50,

  pickAnOrange: function(){
    if (this.oranges > 0) {
      this.oranges -= 1;
      return true;
    } else {
      return false;
    }
  },

  ageOneYear: function(){
    if (this.age >= 99) {
      this.alive = false;
    } else {
      this.age++;
      this.alive = true;
      if (this.age < 5) {
        this.height = (this.age * 25);
      }
      if (this.age >= 5 && this.age < 10) {
        this.height = (this.age * 25);
        this.oranges = 10;
      }
      if (this.age >= 10 && this.age < 20) {
        this.height = ((9 * 25) + ((this.age - 9) * 10));
        this.oranges = 20;
      }
      if (this.age >= 20 && this.age < 40) {
        this.height = ((9 * 25) + (10 * 10));
        this.oranges = 5;
      }
      if (this.age >= 40 && this.age < 50) {
        this.height = ((9 * 25) + (10 * 10));
        this.oranges = 0;
      }
      //peut mourir de façon aléatoire !
      let isGoingToDie = Math.floor(Math.random() * (this.ageMax - (this.ageMax - this.age) ) + this.age);
      if (this.age > 50 && this.age < 99) {
        this.height = ((9 * 25) + (10 * 10));
        this.oranges = 0;
      }
      if (this.age >= 99) { // age > 100 =>> on meurt !
        this.oranges = 0;
        this.height = ((9 * 25) + (10 * 10));
      }

    }

  },

  seed: function(){
    this.alive = false;
    this.height = 0;
    this.age = 0;
    this.oranges = 0;
  }
};
/*
Attributes
  height (in cm)
  age (in year)
  oranges
  alive

Behaviours
  pickAnOrange
  ageOneYear
  seed

Business Rules
  the Orange Tree should age each year
  it should grow each year:
    25 centimeters until it is 10 years old
    10 centimeters until it is 20 years old
  it should produce each year:
    10 oranges when it's between 5 and 10 years old
    20 oranges when it's between 10 and 20 years old
    5 oranges until it's 40 years old
    it should not die until it is at least 50 years old and can't get past 100 years
  When we seed an orangeTree, it resets all its attributes
*/
module.exports = orangeTree;
