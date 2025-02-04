/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let sum = nums[0];
    let maxSum = sum

    for(let i = 1; i < nums.length; i++){
        if(nums[i] > nums[i-1]){
            sum = sum + nums[i];
        }else{
            sum = nums[i];
        }
        maxSum = Math.max(sum, maxSum);
    }
    return maxSum;
};