/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    //initialized empty
    let prefixString = "";
    //an if statement to confirm the constraint given
    if(strs.length < 0 || strs.length > 200  ){
        return prefixString;
    }
    //a for loop to check each character in the first element of the array
    for (let i = 0; i < strs[0].length; i++){
        // const char is equal to each character in the first index of the strs array
        const char = strs[0][i]
        //a for loop for each string in the array
        for(let j = 0; j < strs.length; j++){
            if (strs[j][i] !== char){
                return prefixString;
            } 
        }
        prefixString = prefixString + char;
         
    }
   return prefixString;
};