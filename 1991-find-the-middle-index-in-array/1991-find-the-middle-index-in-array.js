/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    let leftSum = 0;
    let rightSum = nums.reduce((acc, curr) => acc + curr);
    
    for(let i=0; i < nums.length; i++){
        rightSum = rightSum - nums[i];
        if(leftSum === rightSum){
            return i
        }
        leftSum = leftSum + nums[i];
            
    }
    return -1;
    
};