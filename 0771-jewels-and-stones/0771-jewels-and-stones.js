/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let  hashMap = new Map();
    for(let i = 0; i < jewels.length; i++){
        hashMap.set(jewels[i], 0);
    }
        for(let i = 0; i < stones.length; i++){
            if(hashMap.has(stones[i])){
                hashMap.set(stones[i], hashMap.get(stones[i]) + 1)
            }
      
    }
    let result = 0;
    for (const value of hashMap.values()){
        result += value;
    }
    return result;
};
//using hashmap
//map all the jewels into hashmap(letter as key , 0 has value)
//loop through the stones
//if hashMap has stones[i], hashMap[stones[i]] += 1