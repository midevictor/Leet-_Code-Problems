/**
 to* @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
//     let capitalCount = 0
//     for( let i = 0; i < word.length; i++){
//         if(word[i].toUpperCase() === word[i]){
//             capitalCount++;
//         }
    
//     if(capitalCount === word.length || capitalCount === 0 || (capitalCount === 1 && word[0].toUpperCase() === word[0]) ){  return true;}
     
//     }  
    
        let capCount = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() === word[i]) {
            capCount++;
        }
    }
    return capCount === word.length || capCount === 0 || (capCount === 1 &&
        word[0].toUpperCase() === word[0]);
    
};