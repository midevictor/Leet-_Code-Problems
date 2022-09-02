/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0 || x ===1){
        return x;
    }
    //a for looo
    for (let i = 0; i <= x; i++){
        if (i * i == x){
            return i;
        }
        else if ( i * i > x){
            return i - 1;
        }
    }
};