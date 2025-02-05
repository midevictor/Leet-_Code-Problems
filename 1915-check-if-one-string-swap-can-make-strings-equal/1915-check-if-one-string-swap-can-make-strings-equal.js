/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let diffChar = [];

    for(let i = 0; i < s1.length; i++ ){
        if(s1[i] !== s2[i]){
            diffChar.push(i);
        }
        if(diffChar.length > 2){
            return false;
        }
    }
    if(diffChar.length === 0){
        return true;
    }
    if(diffChar.length !== 2){
        return false;
    }

    let [a, b] = diffChar;

    return s1[a] === s2[b] && s1[b] === s2[a]; 

};