var mySqrt = function(x, left = 0, right = x, result = 0) {
    // Base case: when left exceeds right, return the result
    if(left > right) {
        return result;
    }

    let mid = ~~(left + (right - left) / 2);

    // Check if mid * mid equals x
    if(mid * mid === x) {
        return mid;
    }
    // If mid * mid is greater than x, search the left half
    else if(mid * mid > x) {
        return mySqrt(x, left, mid - 1, result);
    }
    // If mid * mid is less than x, update result and search the right half
    else {
        return mySqrt(x, mid + 1, right, mid);
    }
};
