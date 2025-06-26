/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    let sMap = new Map();
    let tMap = new Map();
    for(let char of s){
        sMap.set(char, ((sMap.get(char) || 0) + 1));
    }
    for(let char of t){
        tMap.set(char, ((tMap.get(char) || 0) + 1));
    }
    for (let [key, value] of sMap){
        if(tMap.get(key) !== value){
            return false;
        }
    }

    return true;

};