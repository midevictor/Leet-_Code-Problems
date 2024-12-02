/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // trim,spilt
    return(s.trim().split(" ").filter(word =>  word.trim() !== "").reverse().join(" "))
    
};
