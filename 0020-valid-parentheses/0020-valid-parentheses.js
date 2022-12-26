/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //create hashmap
    let  pair = {
        "{":"}",
        "(":")",
        "[":"]",
    }
    let newArrayStack = [];
    for ( let character of s){
        if(pair[character]){
            newArrayStack.push(pair[character])
        }
        else if
            (newArrayStack.length > 0  && newArrayStack[newArrayStack.length - 1] === character){
                newArrayStack.pop()
            }
        else{
            return false;
        }
        
        
    }

   return newArrayStack.length === 0;
    
};