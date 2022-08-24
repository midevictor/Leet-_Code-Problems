/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n <= 0){
        return false
    }
    for( let i = 0; i < n; i++){
        if(3**i === n){
            return true;
        }
        else if(3 ** i > n){
            return false;
        }
    }
    
};