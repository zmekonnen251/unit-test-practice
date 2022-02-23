const { expect } = require('@jest/globals');
const { ERROR } = require('jest-validate/build/utils');
const { stringLength } = require('./util');

test('Should output character count of the string', () => {
  const length = stringLength('zelale');
  expect(length).toBe(6);
});

test('should input string be at least one character', () => {
  expect(() => {
    stringLength('');
  }).toThrow();
});

test('should input string be at most ten character', () => {
  expect(() => {
    stringLength('Hsadfasdfasdfasdfasdfasfdasdf');
  }).toThrow();
});
