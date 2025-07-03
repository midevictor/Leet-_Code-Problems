/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    let word = ["a"];

    while(word.length < k){
        let res = [];
        for (let char of word){
            let next = (char === 'z') ? 'a'  : String.fromCharCode(char.charCodeAt(0) + 1);
            res.push(next);
        }
        word = word.concat(res);
    }
   return word[k -1]; 
    
};