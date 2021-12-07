const { expect, it } = require('@jest/globals');
const stringLength = require('./stringLength.js');

it('String length', () => {
  expect(stringLength('Hello')).toBe(5);
})

it('String min-length requirements', () => {
  expect(stringLength('')).toBe('Error');
});

it('String max-length requirements', () => {
  expect(stringLength('This is a significantly longer string')).toBe('Error');
})
