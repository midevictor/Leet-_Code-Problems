/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    //binary search
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let mid = Math.floor(left + (right-left)/2);
        if(arr[mid] < arr[mid + 1]){
            left = mid + 1;
        }
        else{
           right = mid;
        }
    }
    
    return left;
    
};