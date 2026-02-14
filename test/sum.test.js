const libray = require("../src/library");

test("adds 1 + 2 to equal 3", () => {
  expect(libray.sum(1, 2)).toBe(3);
});

test("multiplies 4 * 2 to equal 8", () => {
  expect(libray.multiply(4, 2)).toBe(8);
});

test("square 2 * 2 to equal 4", () => {
  expect(libray.square(2)).toBe(4);
});
