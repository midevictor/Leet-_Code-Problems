/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let newSet = new Set();
    for(let letter of s){
        if(newSet.has(letter)){
            return letter;
        }
        else{
            newSet.add(letter)
        }
    }
    return ""
    
};
