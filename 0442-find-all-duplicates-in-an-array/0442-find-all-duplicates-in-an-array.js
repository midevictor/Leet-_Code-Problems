/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let result = [];
    for(let i = 0; i < nums.length; i++){
        let value = Math.abs(nums[i])
        let index =  value - 1;
        if(nums[index] < 0){
            result.push(value);
        }
        else{
           nums[index] = nums[index] * - 1
        }
    }
    return result;
    
};