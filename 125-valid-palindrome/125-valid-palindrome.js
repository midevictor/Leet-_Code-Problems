/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let p = s.toLowerCase().replace(/[^a-zA-Z0-9]/g,"").split("").reverse().join("");
     s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g,"").split("").join("");
    console.log(s);
    console.log(p);
    if(s == p){
        return true;
    }
    else{
        return false;
    }
};