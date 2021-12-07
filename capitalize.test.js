const { it, expect } = require("@jest/globals");

it('Capitalized string', () => {
  expect(capitalize('hello')).toBe('Hello');
});

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
