/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let count = 0;
    for(let word in words){
        let i = words[word];
        if(pref === i.slice(0, pref.length)){
            count++;
        }
    }
    return count;
};