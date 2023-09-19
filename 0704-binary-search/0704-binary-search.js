/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    while(left <= right){
    let mid = Math.floor((left+right)/2);
    const binVal = nums[mid];
        if(binVal === target){
            return mid;
        }
        else if(binVal < target){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
        
   }
    return -1;
   
};