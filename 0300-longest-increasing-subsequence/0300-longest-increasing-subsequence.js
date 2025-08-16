/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = new Array(nums.length).fill(1);

    for(let i = 1; i < nums.length; i++){
        for(let j = 0; j < i; j++){
            if(nums[j] >= nums[i]){
                continue;
            }
            dp[i] = Math.max(dp[i], dp[j] + 1);

        }
    }

    let LIS = 0;
    for( let c of dp){
         LIS = Math.max(LIS, c)
    }
    return LIS;
};