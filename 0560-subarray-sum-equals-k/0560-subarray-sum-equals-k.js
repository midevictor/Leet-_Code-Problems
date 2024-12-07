/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    
//     let count = 0;
    
//     for(let i = 0; i < nums.length; i++){
//         let sum = 0;
//         for(let j = i; j < nums.length; j++){
//             sum += nums[j];
//             if(sum === k){
//                 count++;
//             }
//         }
//     }
    
//     return count;
    
    let prefixSum = 0;
    let count = 0;
    let prefixCount = new Map();
    prefixCount.set(0, 1)
    
    for(let num of nums){
        prefixSum += num;
        if(prefixCount.has(prefixSum - k)){
            count += prefixCount.get(prefixSum - k);
        }
        
        prefixCount.set(prefixSum, (prefixCount.get(prefixSum) || 0) +1);
        
    }
    return count;
};