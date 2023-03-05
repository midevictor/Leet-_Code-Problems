/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
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
//pivot index : sum(nums[i-1]) === sum(nums[i+1]) 
