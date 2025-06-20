/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map();
    for(let num of nums){
        map.set(num , (map.get(num) || 0) + 1)
    }
    for(let [key, value] of map){
        if(value > 1){
            return true;
        }
       
    }
    return false;
    
};