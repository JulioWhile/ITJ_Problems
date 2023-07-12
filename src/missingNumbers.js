// We define a function called missingNumbers that takes one argument, nums (which is an array)
function missingNumbers(nums) {
  // Initialize an empty array to store missing numbers
  let result = [];

  // Iterate over the range from 1 to the length of the list nums
  for (let i = 1; i <= nums.length; i++) {
    // If the number i (which is in the range from 1 to the length of the list) is not in nums
    if (!nums.includes(i)) {
      // We push it to the array result
      result.push(i);
    }
  }
  // We return the array result, which contains all the missing numbers in nums
  return result;
}

// We export the function so that it can be used in other files.
module.exports = missingNumbers;