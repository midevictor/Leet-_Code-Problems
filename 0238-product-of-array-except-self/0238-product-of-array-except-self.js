/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const previous = [];
    for (let i = 0; i < nums.length; i++ ){
        if(nums[i-1] === undefined){
            previous[i] = nums[i]
        }
        else{
            previous[i] = previous[i-1] * nums[i]
        }
    }
    //to avoid using two sepearte tables for prefix and suffix
    let post = 1;
    for( let i = nums.length-1; i >= 0; i-- ){
        if(nums[i+1] === undefined){
            previous[i] = previous[i-1]
            post = nums[i]
        }
        else{
            previous[i] = (previous[i-1] === undefined ? 1: previous[i-1]) *post
            post = post * nums[i]
            
        }
    }
    return previous
    
};