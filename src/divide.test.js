const divide = require('./divide');

test('divids 4 / 2 to equal 2', () => {
  expect(divide(4, 2)).toBe(2);
});