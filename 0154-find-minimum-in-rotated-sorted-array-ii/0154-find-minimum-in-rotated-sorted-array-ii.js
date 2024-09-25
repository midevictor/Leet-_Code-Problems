/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length -  1;
    
    while(left < right){
        let mid = ~~(left + (right - left) / 2);
        
        if(nums[right] < nums[mid]){
            left = mid + 1;
            
        }
        else if(nums[mid] < nums[right]) {
            right = mid;
        }
        else{
            right --
        }
    }
    return nums[left];
};