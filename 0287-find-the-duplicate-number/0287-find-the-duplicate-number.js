/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // Step 1: Detect cycle using Floyd's Tortoise and Hare
    let slow = nums[0];
    let fast = nums[0];

    // Move slow by 1 step and fast by 2 steps
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    // Step 2: Find the entry point of the cycle (duplicate)
    let pointer1 = nums[0];
    let pointer2 = slow;

    while (pointer1 !== pointer2) {
        pointer1 = nums[pointer1];
        pointer2 = nums[pointer2];
    }

    return pointer1; // The duplicate number
};
