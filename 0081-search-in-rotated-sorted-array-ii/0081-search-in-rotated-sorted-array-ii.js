/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while(left <= right){
        let mid = ~~ (left + (right - left) / 2);
        
        // If target found
        if(nums[mid] === target){
            return true;
        }
        
        // Handle duplicates: If left, mid, and right are the same, skip both ends
        if (nums[left] === nums[mid] && nums[right] === nums[mid]) {
            left++;
            right--;
            continue;
        }
        
        // Check if the left half is sorted
        if(nums[left] <= nums[mid]){
            // If target is within the sorted left half
            if(target >= nums[left] && target < nums[mid]){
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } 
        // Otherwise, the right half must be sorted
        else {
            // If target is within the sorted right half
            if(target > nums[mid] && target <= nums[right]){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    
    // Target not found
    return false;
};
