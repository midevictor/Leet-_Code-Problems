/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(nums.length === 0){
        return [-1 , -1];
    }
    let firstPosition = binarySearch(0, nums.length-1, nums, target);
    if(firstPosition  === -1){
        return [-1, -1];
    }

    let start = firstPosition ;
    let end = firstPosition ;
    let tempPos1;
    let tempPos2;

    while(start != -1){
        tempPos1 = start;
        start = binarySearch(0, start - 1, nums, target);
    }
    start = tempPos1;

    while(end != -1){
        tempPos2 = end;
        end = binarySearch(end + 1, nums.length - 1, nums, target);
    }
    end = tempPos2;
    return [start, end];

    
};
const  binarySearch = function(left, right, nums, target){
    while(left <= right){
        let mid = Math.floor((left + right)/2);
        if(nums[mid] === target){
            return mid;
        }
        if(nums[mid] < target){
            left = mid + 1;
        }
        if(nums[mid] > target ){
            right = mid - 1;
        }
    }
    return -1;

}