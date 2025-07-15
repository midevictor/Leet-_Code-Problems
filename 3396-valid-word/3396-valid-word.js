/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    if(word.length < 3){
        return false;
    }
    let vowel = 0;
    let consonant = 0;
    for(ch of word){
       
        if(!/[a-zA-Z0-9]/.test(ch)){
            return false
        }
        if(/[a-zA-Z]/.test(ch)){
        let character = ch.toLowerCase();
        if('aeiou'.includes(character)){
            vowel++;
        }else{
            consonant++;
        }
        }
    }
    if(vowel > 0 && consonant > 0){
        return true;
    }
    return false;

    
};