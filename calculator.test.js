const { expect } = require('@jest/globals');
const { describe } = require('yargs');
const { calculator } = require('./calculator');

test('add two numbers', () => {
  const result = calculator.add(3, 5);
  expect(result).toBe(8);
});

test('subtract one num from another', () => {
  const result = calculator.subtract(7, 2);
  expect(result).toBe(5);
});

test('should result be product of 4*5=20', () => {
  const result = calculator.multiplay(4, 5);
  expect(result).toBe(20);
});

test('Should throw an error ,divsion by zero', () => {
  expect(() => {
    calculator.divide(6, 0);
  }).toThrow();
});
