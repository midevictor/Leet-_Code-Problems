/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    
   let set = new Set();
    
    return nums.reduce((acc, num) => {
        set.add(num);
        
        if(set.has(num-diff) && set.has(num-2*diff)){
           return acc + 1;
        }
        return acc
        
    }, 0)
    
};