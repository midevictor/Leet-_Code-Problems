/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let array = s.trim().split(" ");
     return(array.pop().length);
   
};