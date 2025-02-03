/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    if(nums.length === 1){
        return 1;
    }
    let incCount = 1;
    let decCount = 1;
    let maxInc = 1;
    let maxDec = 1;

    for(let i = 1; i < nums.length; i++){
        if(nums[i] > nums[i-1]){
            incCount++;
            decCount = 1;
        }
        else if(nums[i] < nums[i-1]){
            decCount++;
            incCount = 1;
        }
        else{
            incCount = 1;
            decCount = 1;
        }
        maxInc = Math.max(maxInc, incCount);
        maxDec = Math.max(maxDec, decCount);
    }

    return Math.max(maxInc, maxDec);

};