/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
     let currCount = 0;
     let count = 1;
     for(let i = 0; i < word.length - 1; i++){
        if(word[i] === word[i + 1]){
            currCount++;
        } else {
            count = count + currCount ;
            currCount = 0;
        }
     }
     count = count + currCount;
     return count;
};
