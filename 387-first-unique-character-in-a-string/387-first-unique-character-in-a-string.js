/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    //Created a new object
    let emptyObject = {}
    //loop through s
    for(let i = 0; i < s.length; i++){
//an if condition statement to check if thr character in s appears in the object or not
        if(!emptyObject[s[i]]){
    //added the key of the current character in s to the object and gave it a value of 1
            emptyObject[s[i]] = 1;
        }
    //increment the character by 1
        else if(emptyObject[s[i]]){
          emptyObject[s[i]]++;  
        }
    }
    for(let i = 0; i < s.length; i++){
        if(emptyObject[s[i]] === 1)
            {
                return[i];
            }
    
    }
    return -1;

         
    };
   
    
