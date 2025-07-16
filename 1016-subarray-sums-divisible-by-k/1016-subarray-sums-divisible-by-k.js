/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
   
//     let count = 0;
//     for(let i = 0; i < nums.length; i++){
//          let sum = 0;
//          for(let j = i; j < nums.length; j++){
//             sum = sum + nums[j];
//             if(sum % k === 0){
//                 count++;
//             }
//          }
         

//     }
//    return count;

let remainderCount = {0:1};
let remainder = 0;
let count = 0;
let prefixSum = 0;
for(let num of nums){
    prefixSum += num
    remainder = prefixSum % k;
    if(remainder < 0){
        remainder += k;
    }
    if(remainderCount[remainder]){
        count = count + remainderCount[remainder]
    }
    remainderCount[remainder] = (remainderCount[remainder]|| 0 )+ 1;
}
return count;
    
};