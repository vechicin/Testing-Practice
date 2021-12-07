const { it, expect } = require('@jest/globals');
const reverseString = require('./reverseString.js');

it('Reversed string', () => {
  expect(reverseString('Hello')).toBe('olleH');
})
