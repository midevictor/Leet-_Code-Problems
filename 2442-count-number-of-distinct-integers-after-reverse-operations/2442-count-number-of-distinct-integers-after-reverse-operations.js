/**
 * @param {number[]} nums
 * @return {number}
 */

const reverseIntegers = (num) => {
    let str = num + "";
    return Number(str.split("").reverse().join(""));
}
   
var countDistinctIntegers = function(nums) {
    let newArray = [...nums];
    for(let i = 0; i < nums.length; i++){
        newArray.push(reverseIntegers(nums[i]));
    }
    return new Set(newArray).size;
  
     
};
