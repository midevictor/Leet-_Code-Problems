/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // Initialize an empty Set
    const seen = new Set();
    
    // Iterate through each number in nums
    for (let num of nums) {
        // Check if the number is already in the Set
        if (seen.has(num)) {
            return num; // Duplicate found
        }
        // Add the number to the Set
        seen.add(num);
    }
    
    // In case there is no duplicate (not expected in this problem)
    return -1;
};
