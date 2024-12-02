/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    let result = []
    for (num of nums){
        map.set(num,  (map.get(num) || 0) + 1 );
    }
    let newArray = Array.from(map.entries());
    newArray.sort((a,b) => b[1] - a[1]);
    console.log(newArray);
    
    for(let i = 0; i < k; i++){
        result.push(newArray[i][0]);
        
    }
    return result;
};