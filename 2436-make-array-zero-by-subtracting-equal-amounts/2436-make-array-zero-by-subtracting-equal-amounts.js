/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let set = new Set();
    for(let num of nums){
        if(num !== 0){
            set.add(num);
        }
    }
    return set.size;
};