/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let newSet = new Set(nums);
    // console.log(newSet);
    let array =[];
    for (let i = 1; i <= nums.length; i++){
        if(!newSet.has(i)){
            array.push(i);
        }
    }
    
    return array;

};