/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // let dp = new Array(nums.length).fill(1);

    // for(let i = 1; i < nums.length; i++){
    //     for(let j = 0; j < i; j++){
    //         if(nums[j] >= nums[i]){
    //             continue;
    //         }
    //         dp[i] = Math.max(dp[i], dp[j] + 1);

    //     }
    // }

    // let LIS = 0;
    // for( let c of dp){
    //      LIS = Math.max(LIS, c)
    // }
    // return LIS;

    let LIS = [];
    for(let i = 0; i < nums.length; i++){
        if(LIS.length === 0 || nums[i] > LIS[LIS.length - 1] ){
            LIS.push(nums[i]);
        } else{
            let left = 0;
            let right = LIS.length;
            while(left < right){
                let mid = Math.floor((left + right)/2);
                if(LIS[mid] < nums[i]){
                    left = mid + 1;
                }else{
                    right = mid;
                }

            }
            LIS[left] = nums[i];
        }
        
    }
    return LIS.length;
};