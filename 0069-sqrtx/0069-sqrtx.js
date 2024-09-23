/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x, left = 0, right = x, result = 0) {
    if(left > right) {
       return result
       }
    let mid = ~~(left + (right - left) / 2);
    if(mid * mid === x){
        return mid;
    }
    else if(mid * mid > x){
        return mySqrt(x, left , mid - 1, result);
    }
    else{
        return mySqrt(x, mid + 1, right, mid);
    }
};