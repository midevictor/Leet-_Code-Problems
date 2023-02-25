/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.includes(target)){
        return nums.indexOf(target);
    }
    else{
        //basically appends the target to the current array, sort it in an ascending order and returns the index of the first target found;
        return [...nums, target].sort((a,b) => a-b).indexOf(target);
    }
    
};