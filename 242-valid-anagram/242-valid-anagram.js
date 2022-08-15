/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // let newS = s.split("").sort().join();
    // let newT = t.split("").sort().join(); 
    // if( newS == newT){
    //     return true;
    // }
    // else{
    //     return false;
    // }
    //Was not optimized
    
    
    //an if statement to check if length of the two strings are equal
    if (s.length !== t.length) {
        return false;
    }
    // Created an empty object
    let sMap = {};
    let tMap = {};
    for (let i = 0; i < s.length; i++) {
        if (sMap.hasOwnProperty(s[i])) {
            sMap[s[i]]++;
        } else {
            sMap[s[i]] = 1;
        }
        if (tMap.hasOwnProperty(t[i])) {
            tMap[t[i]]++;
        } else {
            tMap[t[i]] = 1;
        }
    }
    for (let ch in sMap) {
        if (sMap[ch] !== tMap[ch]) {
            return false;
        }
    }
    return true;
    
};