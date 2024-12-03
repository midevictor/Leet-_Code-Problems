/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    let currString = "";
    let currNum = 0;
    
    for(let char of s){
        if(!isNaN(char)){
            //handle cases like 23, 15 etc
            currNum = currNum*10+parseInt(char);
        }
        else if(char === "["){
            stack.push(currString);
            stack.push(currNum);
            currString = "";
            currNum = 0;
        }
        else if(char === "]"){
            const num = stack.pop();
            const prevString = stack.pop();
            currString = prevString + currString.repeat(num)
        }
        else{
            currString += char;
        }
    }
    
    return currString;
    
};