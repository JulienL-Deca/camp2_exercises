const myOrange = require("./03_orange_tree");
/*
*/
describe("basic tests", () => {
  test("when seed => all values should be reset", function() {
    myOrange.seed();
    expect(myOrange.alive).toBe(true);
    expect(myOrange.age).toBe(0);
    expect(myOrange.height).toBe(0);
    expect(myOrange.oranges).toBe(0);
  });
  test("when ageOneYear => age should age++", function() {
    const tempAge = myOrange.age;
    myOrange.seed();
    myOrange.ageOneYear();
    expect(myOrange.age).toBe(tempAge+1);
  });
  test("should not die before 50", function() {
    myOrange.seed();
    for (let age = 1; age < 50; age++) {
      myOrange.ageOneYear();
      expect(myOrange.alive).toBe(true);
    }
  });
  test("should die after 100", function() {
    myOrange.age = 99;
    expect(myOrange.alive).toBe(true);
    myOrange.ageOneYear();
    expect(myOrange.alive).toBe(false);
  });
  test("should be able to pick an orange", function() {
    myOrange.oranges = 10;
    myOrange.pickAnOrange();
    expect(myOrange.oranges).toBe(9);
  });
  test(" !pickAnOrange before 4 years old (inclusive)", function() {
    myOrange.seed();
    let boolean = false;
    for (let age = 1; age < 5; age++) {
      myOrange.ageOneYear();
      boolean = myOrange.pickAnOrange();
      expect(myOrange.oranges).toBe(0);
      expect(boolean).toBe(false);
    }
  });
})
describe("height(s) tests when growth", () => {
  test("should growth 25cm each year between 0 and 4 years old (inclusive)", function() {
    myOrange.seed();
    let ageToCompare = myOrange.height;
    for (let age = 1; age < 10; age++) {
      myOrange.ageOneYear();
      let currentHeight = 25 * age;
      expect(myOrange.height).toBe(currentHeight);
    }
    expect(myOrange.height).toBe(225);
  });
  test("should growth 10cm each year between 10 and 20 years old (inclusive)", function() {
    myOrange.seed();
    let ageToCompare = myOrange.height;
    for (let age = 1; age < 10; age++) {
      myOrange.ageOneYear();
    }
    for (let age = 10; age < 20; age++) {
      myOrange.ageOneYear();
      let currentHeight = 225 + (10 * (age - 9));
      expect(myOrange.height).toBe(currentHeight);
    }
  });
})

describe("orange(s) test when growth", () => {
  test("no orange available between 0 and 4 years old (inclusive)", function() {
    myOrange.seed();
    for (let age = 1; age < 5; age++) {
      myOrange.ageOneYear();
      expect(myOrange.oranges).toBe(0);
    }
  });
  test("10 oranges available bewteen 5 and 10 exclusive years old ", function() {
    myOrange.seed();
    for (let ageVar = 1; ageVar < 5; ageVar++) {
      myOrange.ageOneYear();
    }
    expect(myOrange.age).toBe(4);
    for (let ageVar = 5; ageVar < 10; ageVar++) {
      myOrange.ageOneYear();
      expect(myOrange.oranges).toBe(10);
      expect(myOrange.age).toBe(ageVar);
    }
    expect(myOrange.oranges).toBe(10);
    expect(myOrange.age).toBe(9);
  });
  test("20 oranges available bewteen 10 and 20 exclusive years old ", function() {
    myOrange.seed();
    for (let age = 1; age < 10; age++) {
      myOrange.ageOneYear();
    }
    expect(myOrange.age).toBe(9);
    for (let ageVar = 10; ageVar < 20; ageVar++) {
      myOrange.ageOneYear();
      expect(myOrange.oranges).toBe(20);
      expect(myOrange.age).toBe(ageVar);
    }
    expect(myOrange.oranges).toBe(20);
    expect(myOrange.age).toBe(19);
  });
  test("5 oranges available bewteen 20 and 40 exclusive years old ", function() {
    myOrange.seed();
    for (let ageVar = 1; ageVar < 20; ageVar++) {
      myOrange.ageOneYear();
    }
    expect(myOrange.age).toBe(19);
    for (let ageVar = 20; ageVar < 40; ageVar++) {
      myOrange.ageOneYear();
      expect(myOrange.oranges).toBe(5);
      expect(myOrange.age).toBe(ageVar);
    }
    expect(myOrange.oranges).toBe(5);
    expect(myOrange.age).toBe(39);
  });
})
describe("check limits of condition for \"orange\"", () => {
  test("no orange available @ 4 years old ", function() {
    myOrange.seed();
    for (let age = 1; age < 5; age++) {
      myOrange.ageOneYear();
      expect(myOrange.oranges).toBe(0);
      expect(myOrange.age).toBe(age);
    }
    expect(myOrange.oranges).toBe(0);
    expect(myOrange.age).toBe(4);
  });
  test("10 oranges available @ 9 years old ", function() {
    myOrange.seed();
    for (let age = 1; age < 10; age++) {
      myOrange.ageOneYear();
    }
    expect(myOrange.oranges).toBe(10);
    expect(myOrange.age).toBe(9);
  });
  test("20 oranges available @ 10 years old ", function() {
    myOrange.seed();
    for (let ageVar = 1; ageVar < 11; ageVar++) {
      myOrange.ageOneYear();
    }
    expect(myOrange.oranges).toBe(20);
    expect(myOrange.age).toBe(10);
  });
  test("20 oranges available @ 19 years old ", function() {
    myOrange.seed();
    for (let ageVar = 1; ageVar < 20; ageVar++) {
      myOrange.ageOneYear();
    }
    expect(myOrange.oranges).toBe(20);
    expect(myOrange.age).toBe(19);
  });
  test("5 oranges available @ 20 years old ", function() {
    myOrange.seed();
    for (let ageVar = 1; ageVar < 21; ageVar++) {
      myOrange.ageOneYear();
    }
    expect(myOrange.oranges).toBe(5);
    expect(myOrange.age).toBe(20);
  });
  test("5 oranges available @ 40 years old ", function() {
    myOrange.seed();
    for (let ageVar = 1; ageVar < 40; ageVar++) {
      myOrange.ageOneYear();
    }
    expect(myOrange.oranges).toBe(5);
    expect(myOrange.age).toBe(39);
  });
  test("0 oranges available @ 40 years old ", function() {
    myOrange.seed();
    for (let ageVar = 1; ageVar < 41; ageVar++) {
      myOrange.ageOneYear();
    }
    expect(myOrange.oranges).toBe(0);
    expect(myOrange.age).toBe(40);
  });
  test("0 oranges available after 40 years old ", function() {
    myOrange.seed();
    for (let ageVar = 1; ageVar < 99; ageVar++) {
      myOrange.ageOneYear();
    }
    expect(myOrange.oranges).toBe(0);
    expect(myOrange.age).toBe(98);
  });
})
describe("should die",() => {
  test("should die after 50 and before 100", function() {
    myOrange.seed()
    while (myOrange.alive) {
      for (let ageVar = 1; ageVar < 100; ageVar++) {
        myOrange.ageOneYear();
      }
      expect(myOrange.age).toBeGreaterThanOrEqual(50);
      expect(myOrange.age).toBeLessThanOrEqual(100);
    }
    expect(myOrange.alive).toBe(false);

  });
  test("should die after 100", function() {
    myOrange.age = 100;
    myOrange.ageOneYear();
    expect(myOrange.alive).toBe(false);
  });
})
/*
describe("discovered bugs and we have create a test ...", () => {
  test("hello ${name} passed in args", () => {
    console.log = jest.fn();
    myOrange("testName");
    expect(console.log).toHaveBeenCalledWith("Howdy testName!");
  });
})
*/
