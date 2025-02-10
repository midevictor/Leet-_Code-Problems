/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let stack = [];

    for(let char of s){
        if(char >= "a" && char <= "z"){
            stack.push(char);
        }
        else if(char >= "0" && char <= "9" && stack.length > 0){
            stack.pop();

        }
    }
    return stack.join("")
};