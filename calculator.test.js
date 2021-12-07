const { test, expect } = require('@jest/globals');
const { describe } = require('yargs');
const Calculator = require('./calculator.js');
const { calculator } = Calculator;

describe('additions', () => {
  test('first addition', () => {
    expect(calculator.add(6,5)).toBe(11);
  })
});
