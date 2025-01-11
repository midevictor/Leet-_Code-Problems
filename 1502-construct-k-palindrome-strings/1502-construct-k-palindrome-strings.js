/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    
    let countFreq = {};

    for(let char of s){
        countFreq[char] = (countFreq[char] || 0) + 1;
    }

    let count = 0;
    for(let ch of Object.values(countFreq)){
        if(ch%2 !== 0){
            count++;
        }

    }

    if(count > k){
        return false;
    }
    if(s.length < k){
        return false
    }

    return true;
};