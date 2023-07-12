// We define a function called twoSum that takes two arguments, nums and target
function twoSum(nums, target) {
    // Initialize an empty object that will use the array numbers as keys and its indexes as values.
    let map = {};

    // Iterate over each number in the array nums
    for (let i = 0; i < nums.length; i++) {
        // We calculate the complement of the current number
        // i.e., how much is left to reach the target.
        let complement = target - nums[i];

        // If the complement is found as a key in our map object.
        // which means that we have already found this number before
        if (map[complement] !== undefined) {
            // We return an array with the index of the complement and the current index.
            return [map[complement], i];
        }
        // If the complement is not in our map object, we add the current number as a key and its index as value
        map[nums[i]] = i;
    }
}

// We export the function so that it can be used in other files.
module.exports = twoSum;
