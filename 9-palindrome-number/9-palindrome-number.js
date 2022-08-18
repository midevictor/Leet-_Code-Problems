/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //I converted to a string because the input was a number
    let newString = x.toString().split("").reverse().join("");
    // console.log(newString);
    if (newString == x){
        return true;
    }
    else{
        return false;
    }
    
};