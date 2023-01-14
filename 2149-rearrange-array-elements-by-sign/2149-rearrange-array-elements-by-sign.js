/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    //a zero indexed array
    //length is even (length % 2 === 0)
    //equal number of positive and negative signs
    //define positvive numbers using the filter method
    //define positvive numbers using the filter method
    
    let positiveNums = nums.filter(n => n > 0);
    if (positiveNums.length === nums.length){
        return nums   
    }
    let negativeNums = nums.filter(n => n < 0);
    let newArray = [];
    for (let i=0; i < positiveNums.length; i++){
        newArray.push( positiveNums[i], negativeNums[i])
    }
    
    return newArray;
};