/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let longestCommonPrefix = "";
    for(let i = 0; i < strs[0].length; i++){
        let char = strs[0][i];
        for(let j = 1; j < strs.length; j++){
            if(strs[j][i] !== char){
                return longestCommonPrefix;
            }
        }
        longestCommonPrefix = longestCommonPrefix + char
    }
    return longestCommonPrefix;

    
};