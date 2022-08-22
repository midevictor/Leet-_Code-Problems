/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n < 0){
        return false;
    }
    //i want to run a foor loop
    for (let i = 0; i <= n; i++){
        
        //an if statement
        if(4**i === n){
            return true;
        }
        else if(4**i > n){
            return false;
        }
    }
    
};