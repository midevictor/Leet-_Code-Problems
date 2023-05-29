/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
   let sortednums = [...new Set(nums)].sort((a,b)=> b-a);
    if(sortednums.length >= 3){
        return sortednums[2];
    }
        return sortednums[0];
    
    
};