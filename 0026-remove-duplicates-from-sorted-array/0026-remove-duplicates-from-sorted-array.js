/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let counter = 0;
    for(let i = 0; i <nums.length; i++){
        if(nums[i] !== nums[i-1] ){
            nums[counter] = nums[i];
            counter++
        }
    }
    return counter;
    
};