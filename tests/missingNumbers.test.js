// Import the missingNumbers function from our missingNumbers.js file
const missingNumbers = require('../src/missingNumbers');

// We perform a test to ensure that the missingNumbers function is defined.
test('missingNumbers function exists', () => {
  expect(missingNumbers).toBeDefined();
});

// We perform a test to ensure that the missingNumbers function returns the expected result.
test('find missing numbers in the array', () => {
  // We check that for the array [4, 3, 2, 7, 8, 2, 3, 1], the function returns [5, 6].
  expect(missingNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
  // We check that for the array [1, 1], the function returns [2].
  expect(missingNumbers([1, 1])).toEqual([2]);
});