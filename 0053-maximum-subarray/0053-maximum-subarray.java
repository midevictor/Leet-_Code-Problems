class Solution {
    public int maxSubArray(int[] nums) {
        int sum = 0;
        int maxSum =  nums[0];
        for(int num:nums){
            sum = num + sum;
            maxSum = Math.max(sum, maxSum);
            if(sum < 0){
                sum = 0;
            }
        }
        return maxSum;
 //kadeane's Algorithm
// taking a sum to sum up elements from nums
// initializing the max sum
// looping through the array nums
// summing up with each element
// keeping the maximum sum in a value
// if at any iteration, the sum becomes less than 0, make thae sum as 0
        
    }
}