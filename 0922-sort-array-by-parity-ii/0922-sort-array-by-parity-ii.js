/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
  let evenNums = nums.filter(n => n%2===0);
  let oddNums = nums.filter(n => n%2!==0);
    let newArray = []
    
    for(let i = 0; i < evenNums.length; i++){
        newArray.push( evenNums[i], oddNums[i]);
     
        
    }
    return newArray
    
};