/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let newString = s.slice(0, 2);
    console.log(newString);
    for( let i = 2; i < s.length; i++){
        if((s[i]!==s[i-1]) || (s[i]!==s[i-2])){
            newString += s[i]
        }
    }
    return newString;
    
    
};