import {
  capitalizeThis,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
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

// caesar
test('caesar cipher', () => {
  // test for keeping same case
  expect(caesarCipher('abc', 0)).toBe('abc');

  // Case 1: Positive number, no wrapping
  expect(caesarCipher('Aiw', 2)).toBe('Cky');

  // Case 2: Positive number, wrapping
  expect(caesarCipher('ZzB', 2)).toBe('BbD');

  // Case 3: Negative number, no wrapping
  expect(caesarCipher('Mfr', -2)).toBe('Kdp');

  expect(caesarCipher('Cfr!', -13)).toBe('Pse!');
});

//
test('analyze array', () => {
  const analyzeThiArray = analyzeArray([1, 8, 3, 4, 2, 6]);

  expect(analyzeThiArray).toEqual({
    average: 4,
    min: 1,
    max: 8,
    theLength: 6,
  });
});
