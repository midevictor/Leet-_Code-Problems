/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map();
    
   for(let num of nums){
       map.set(num, (map.get(num) || 0) + 1)
   }
    let highestElement = Math.floor((nums.length)/2);
    let majorityElement = null;
    
    for(let [key , value] of map){
        if(value > highestElement){
            majorityElement = key;
            
        }
    }
    
    return majorityElement;
};