/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
// taking a sum to sum up elements from nums
// initializing the max sum
// looping through the array nums
// summing up with each element
// keeping the maximum sum in a value
// if at any iteration, the sum becomes less than 0, make thae sum as 0
  let sum = 0;
  let maxSum = nums[0];
    for(let num of nums){
        sum = sum + num;
        maxSum = Math.max(sum , maxSum); // 5,9,15,23
        if(sum < 0){
            sum = 0;
        }
    }

    
    
    return maxSum   
};