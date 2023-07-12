# JavaScript problem solving 

This project contains solutions for two common programming problems in JavaScript: 
1. finding missing numbers in a range
2. finding two numbers that sum to a specific target.

## Installation
To install the necessary dependencies, execute:
```
npm install
```

## Testing
This project uses Jest to perform unit tests.
To run the tests, use the following command:
```
npm test
```

## Problems
1. **missingNumbers**: Given a list of integers where each integer is in the range from 1 to the length of the list, this function returns a list of all the integers in that range that do not appear in the list.

- Code: `src/missingNumbers.js`
- Tests: `tests/missingNumbers.test.js`
- Time complexity: O(n^2) debido al uso de la función `includes()` dentro de un bucle.
- Space completixy: O(n) donde n es la longitud de la lista de entrada.

```javascript
// missingNumbers.js
function missingNumbers(nums) {
  let result = [];
  
  for(let i = 1; i <= nums.length; i++) {
    if(!nums.includes(i)) {
      result.push(i);
    }
  }
  return result;
}

// missingNumbers.test.js
const missingNumbers = require('../src/missingNumbers');

test('missingNumbers function exists', () => {
  expect(missingNumbers).toBeDefined();
});

test('find missing numbers in the array', () => {
  expect(missingNumbers([4,3,2,7,8,2,3,1])).toEqual([5,6]);
  expect(missingNumbers([1,1])).toEqual([2]);
});
```

2. **twoSum**: Given a list of integers and an integer target, this function returns the indices of two numbers that sum to that target. It assumes that there is exactly one solution and that the same element cannot be used twice.
- Code: `src/twoSum.js`
- Tests: `tests/missingNumbers.test.js`
- Time completixy: O(n) debido a que solo se recorre la lista una vez.
- Space complexity: O(n) porque utilizamos un mapa para almacenar los elementos y sus indices.

```javascript
// twoSum.js
function twoSum(nums, target) {
  let map = {};
  for(let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if(map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
}

// twoSum.test.js
const twoSum = require('../src/twoSum');

test('twoSum function exists', () => {
  expect(twoSum).toBeDefined();
});

test('find two indices that their values sum up to the target', () => {
  expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
  expect(twoSum([3,2,4], 6)).toEqual([1,2]);
  expect(twoSum([3,3], 6)).toEqual([0,1]);
});
```

