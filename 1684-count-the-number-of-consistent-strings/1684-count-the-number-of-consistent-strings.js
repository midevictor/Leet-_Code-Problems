/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let allowedSet = new Set(allowed)
    let count = 0;
    words.forEach(word => {
        let wordsSet = new Set(word);
        let combinedWords = new Set([... allowedSet, ...wordsSet]);
        if(allowedSet.size === combinedWords.size){count++;}
    })
    
    return count;
    
};