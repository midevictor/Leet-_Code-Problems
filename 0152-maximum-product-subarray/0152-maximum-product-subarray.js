/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if(nums.length === 0){
        return
    }

    let maxProduct = nums[0];
    let currProduct = 1;

    for(let i = 0; i < nums.length; i++){
        currProduct = currProduct * nums[i]
        maxProduct = Math.max(currProduct, maxProduct);
        if(currProduct === 0){
            currProduct = 1;
        }
    }
     currProduct = 1;

    for(let i = nums.length-1; i >= 0; i--){
        currProduct = currProduct * nums[i]
        maxProduct = Math.max(currProduct, maxProduct);
        if(currProduct === 0){
            currProduct = 1;
        }
    }

    return maxProduct;

    
};