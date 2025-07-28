/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
   let map = new Map();
   let res = 0;
   for(let num of nums){
    map.set(num, (map.get(num) || 0 ) + 1);
   }

   for( let [key, val] of map){
    if(map.has(key+1)){
        res = Math.max(res, map.get(key)+map.get(key+1));
    }
   }
   return res;

}
