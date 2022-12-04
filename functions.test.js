import {
  capitalizeThis,
  reverseString,
  calculator,
  caesarCipher,
} from './functions.js';

test('capitalize string', () => {
  expect(capitalizeThis('world')).toMatch(/^World/);
});

test('reverse string', () => {
  expect(reverseString('world')).toBe('dlrow');
});

// test calculator object
test('calculator add', () => {
  // add
  // what's a mock function
  const spy = jest.spyOn(calculator, 'add');
  const isAdding = calculator.add(1, 2);

  expect(spy).toHaveBeenCalled();
  expect(isAdding).toBe(3);
});

test('calculator substract', () => {
  // substract
  const spy = jest.spyOn(calculator, 'substract');
  const isSubstracting = calculator.substract(2, 1);

  expect(spy).toHaveBeenCalled();
  expect(isSubstracting).toBe(1);
});

test('calculator divide', () => {
  // divide
  const spy = jest.spyOn(calculator, 'divide');
  const isDividing = calculator.divide(4, 2);

  expect(spy).toHaveBeenCalled();
  expect(isDividing).toBe(2);
});

test('calculator multiply', () => {
  // divide
  const spy = jest.spyOn(calculator, 'multiply');
  const isMultiplying = calculator.multiply(4, 2);

  expect(spy).toHaveBeenCalled();
  expect(isMultiplying).toBe(8);
});

test('caesar cipher', () => {
  // test for keeping same case
  expect(caesarCipher('abc', 0)).toBe('abc');

  expect(caesarCipher('abc', 1)).toBe('bcd');
});
