/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const sortedNums = nums.slice().sort((a,b) => a - b);
    return nums.map(n => sortedNums.indexOf(n));
}