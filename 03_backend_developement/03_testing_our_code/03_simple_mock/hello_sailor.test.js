const helloSailor = require("./hello_sailor");
/*
*/
describe("initial test", () => {
  test("hello ${name} passed in args", () => {
    console.log = jest.fn();
    helloSailor("testName");
    expect(console.log).toHaveBeenCalledWith("Howdy testName!");
  });
  test("hello without anyname passed in args", () => {
    console.log = jest.fn();
    helloSailor("");
    expect(console.log).toHaveBeenCalledWith("Howdy Sailor! Good day to you!");
  });
})

/*
test("a function", () => {
  console.log = jest.fn();
  myAwesomeFunction();
  expect(console.log).toHaveBeenCalledWith("Hello");
});
*/
