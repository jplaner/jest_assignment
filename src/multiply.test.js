const multiply = require('./multiply');

test('adds 1 * 3 to equal 3', () => {
  expect(multiply(1, 3)).toBe(3);
});