/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1){
        return s.length;
    }
    let longestStr = 0;
    for( let i = 0; i< s.length; i++){
        let knownCharacters = {};
        let currentLongestString = 0;
        for( let j = i; j < s.length; j++ ){
            const currentCharacter = s[j];
            
            if(!knownCharacters[currentCharacter]){
               currentLongestString++;
               knownCharacters[currentCharacter] = true;
                longestStr = Math.max(longestStr, currentLongestString)
            }
            else{
                break;
            }
        }
    }
    return longestStr;
    
};