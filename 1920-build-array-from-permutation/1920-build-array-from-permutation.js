/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let newArray = [];
    for(let i = 0; i < nums.length; i++){
        newArray.push(nums[nums[i]]);    
    }
    return newArray;
    
};