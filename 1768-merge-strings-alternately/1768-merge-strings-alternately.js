/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = [];
    //loop through the max length of the two words to get the maximum length;
    let maxLength = Math.max(word1.length, word2.length);
    for (let i = 0; i < maxLength; i++){
        // take a character in the word1 and push into the result array
        if(word1[i])result.push(word1[i]);
        // take a character in word2 and push into the result array
        if(word2[i])result.push(word2[i]);
    }
    return result.join("")   
};