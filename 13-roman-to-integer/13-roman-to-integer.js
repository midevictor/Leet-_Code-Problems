/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const key = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    }
    let newArray = [];
    for(let i = 0; i < s.length; i++){
        if(key[s[i]] < key[s[i + 1]])
            {
                newArray.push(key[s[i + 1]] - key[s[i]] );
                i++;
            }
        else{
            newArray.push(key[s[i]]);
        }
    }
     console.log(newArray);
    return newArray.reduce((total, current) => 
        total+current
    );
   
    
};
