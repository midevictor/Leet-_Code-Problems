/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {
    let len = nums.length
    let map = new Map();
    let totalPair = (len * (len - 1)) / 2
    let goodPair = 0;

    for(let i = 0; i < len; i++){
        let key = i - nums[i];

        if(map.has(key)){
            goodPair = goodPair + map.get(key)
        }
        map.set(key, (map.get(key) || 0)+ 1);

    }
    return totalPair - goodPair
    
};