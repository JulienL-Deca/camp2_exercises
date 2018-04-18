const greeting = require("./greeting");

test("greet a name passed in arg", function() {
  const result = greeting("toto");
  expect(result).toBe("Hello TOTO!");
  expect(result).not.toBe("Hello toto!");
});

test("greet even if empty name passed in arg", function() {
  const result = greeting("");
  expect(result).toBe("Hello WORLD!");
});

test("greet even if no name passed in arg", function() {
  const result = greeting();
  expect(result).toBe("Hello WORLD!");
});
