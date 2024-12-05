/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let freq = Array(26).fill(0);
    
    for(let char of s){
        freq[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    
    for(let char of t){
        freq[char.charCodeAt(0) - "a".charCodeAt(0)]--;
    }
    
    let steps = 0;
    
    for(let count of freq){
        if(count > 0){
            steps += count;
        }
    }
    return steps
};