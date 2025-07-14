/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let left =  0;
    let right =  nums.length -1;
    while(left <= right){
        let mid = left + Math.floor((right - left) / 2);
        if(nums[mid] !== nums[mid+1] && nums[mid-1] !== nums[mid]){
            return nums[mid];
        }
        if((mid % 2 === 0 && nums[mid] === nums[mid+1]) || (mid % 2 === 1 && nums[mid-1] === nums[mid])){
            left = mid + 1
        }else{
            right = mid -1;
        }
       
    }
    return -1;
    
};