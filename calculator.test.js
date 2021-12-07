const { test, expect } = require('@jest/globals');
const calculator = require('./calculator.js');

describe('additions', () => {
  test('first addition', () => {
    expect(new calculator.Calculator(6, 5).add()).toBe(11);
  });
  
  test('second addition', () => {
    expect(new calculator.Calculator(10, 4).add()).toBe(14);
  });

  test('third addition', () => {
    expect(new calculator.Calculator(20, 30).add()).toBe(50);
  });
});

describe('substractions', () => {
  test('first substraction', () => {
    expect(new calculator.Calculator(50, 20).substract()).toBe(30);
  });

  test('second substraction', () => {
    expect(new calculator.Calculator(100, 20).substract()).toBe(80);
  });

  test('third substraction', () => {
    expect(new calculator.Calculator(2021, 1995).substract()).toBe(26);
  });
});

describe('divisions', () => {
  test('first division', () => {
    expect(new calculator.Calculator(40, 20).divide()).toBe(2);
  });

  test('second division', () => {
    expect(new calculator.Calculator(100, 5).divide()).toBe(20);
  });

  test('third division', () => {
    expect(new calculator.Calculator(72, 8).divide()).toBe(9);
  });
});

describe('multiplciations', () => {
  test('first multiplication', () => {
    expect(new calculator.Calculator(4, 4).multiply()).toBe(16);
  });

  test('second multiplication', () => {
    expect(new calculator.Calculator(2, 12).multiply()).toBe(24);
  });

  test('third multiplication', () => {
    expect(new calculator.Calculator(137, 223).multiply()).toBe(30551);
  });
})
