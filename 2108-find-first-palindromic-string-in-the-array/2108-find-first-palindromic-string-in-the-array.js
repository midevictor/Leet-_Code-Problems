/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
//    for (const word of words){
//        if( word === word.split("").reverse().join("")){
//            return word
//        }
//    }
//    return ""
for ( let i = 0; i < words.length; i++){
    const word = words[i];
    let Palindrome = true;
    for( let j = 0; j < word.length/2; j++){
        if(word[j] !== word[word.length - j -1]){
          Palindrome = false;
          break;  
        }
    }
    if(Palindrome){
        return word;
    }
 }
 return "";
};