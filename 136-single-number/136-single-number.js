/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
      nums = nums.sort((a, b) => {return a - b;})
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i-1] || nums[i] === nums[i+1]){
            continue;
        }
        else{
            return nums[i];
        }
    }
                        

};