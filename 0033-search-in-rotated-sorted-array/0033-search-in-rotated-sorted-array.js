/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let right = nums.length - 1;
    let left = 0;
   
    while(left <= right){
        let mid = Math.floor((left+right) / 2);
        console.log(mid)
        if(nums[mid] === target){
            return mid;
        }
        //  this checks if the left part is sorted
        if( nums[mid] >= nums[left]){
            if(target < nums[mid] && target >= nums[left]){
                right = mid - 1;
            }
            else{
                left = mid + 1;
            }
        }
        // checks if the right is sorted
        else if ( nums[mid] < nums[right] ){
            if(target > nums[mid] && target <= nums[right]){
                left = mid + 1;
            }
            else{
                right = mid - 1;
            }
          
        }
    }
    
    return -1;
};