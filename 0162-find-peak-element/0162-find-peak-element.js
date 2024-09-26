/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length -1;
    
    while(left < right){
        let mid = ~~(left + (right - left)/2);
        
        if( mid < nums.length -1 && nums[mid] < nums[mid+1]){
            left = mid + 1;
        }
        else{
            right = mid
        }
    }
    return left;
    
};