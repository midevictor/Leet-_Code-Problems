/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    let s = sentence.split(" ");
    for(let i = 0; i < s.length; i++){
        let word = s[i].split("");
        let newChar = word[0].toLowerCase();
        if(newChar === "a" || newChar === "e" || newChar === "i" || newChar === "o" || newChar === "u" ){
            word.push("ma")
        }
        else{
            word.push(word[0]);
            word.splice(0,1);
            word.push("ma")
        }
        let count = i + 1;
        while(count > 0){
            word.push("a");
            count--;
        }
        s[i] = word.join("");
    }
    return s.join(" ")
};
