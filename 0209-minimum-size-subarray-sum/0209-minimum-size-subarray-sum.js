/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0; 
    let count = 0; 
    let minCount = Infinity;

    for(let i=0, j = 0; i < nums.length; i++){
        sum+=nums[i];
        count++;
        
        while(sum >= target){
            minCount = Math.min(count, minCount);
            sum-=nums[j];
            j++;
            count--;
        }
    }
    if(minCount === Infinity){
        return 0;
    }
    return minCount;
};
