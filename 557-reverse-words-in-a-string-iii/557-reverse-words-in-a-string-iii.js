/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    //split the string 
    let newArray = s.split(" ");
    for(let i = 0; i < newArray.length; i++){
        let word = newArray[i].split("");
        let reverseWord = word.reverse();
        let reverseArray = reverseWord.join("");
        //console.log(reverseArray);
         newArray[i] = reverseArray;
         console.log (newArray[i]);  
    }
     return newArray.join(" ");
};