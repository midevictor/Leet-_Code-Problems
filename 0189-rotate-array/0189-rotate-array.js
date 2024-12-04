/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n; // Handle k > n

    const reverse = (arr, start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    };

     reverse(nums, 0, n - 1);     // Step 1: Reverse entire array
     reverse(nums, 0, k - 1);     // Step 2: Reverse first k elements
    reverse(nums, k, n - 1);     // Step 3: Reverse the rest
};
