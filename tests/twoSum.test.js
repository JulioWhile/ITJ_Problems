// We import the function twoSum from our file twoSum.js
const twoSum = require('../src/twoSum');

// We perform a test to ensure that the function twoSum is defined.
test('twoSum function exists', () => {
    expect(twoSum).toBeDefined();
});

// We perform a test to ensure that the twoSum function returns the expected result.
test('find two indices that their values sum up to the target', () => {
    // We check that for the array [2, 7, 11, 15] and target 9, the function returns [0, 1].
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    // We check that for the array [3, 2, 4] and target 6, the function returns [1, 2].
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    // We check that for the array [3, 3] and target 6, the function returns [0, 1].
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});
