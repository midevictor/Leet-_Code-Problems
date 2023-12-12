/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(nums.length === 0){
        return [-1,-1];
    }
    //gives the mid value from the binary Search function
    const firstPos = binarySearch(0, nums.length-1,nums,target);
    //if the -1 was returned from the function
    if(firstPos === -1){
        return [-1, -1]
    }
    let startPos = firstPos;
    let endPos = firstPos;
    let temp1;
    let temp2;
    while( startPos !== -1){
        temp1 = startPos;
        startPos = binarySearch(0, startPos-1, nums, target);
    }
    startPos = temp1;
    
     while( endPos !== -1){
        temp2 = endPos;
        endPos = binarySearch( endPos+1, nums.length-1,nums, target);
    }
    endPos = temp2;
    return [startPos, endPos]
    
};

const binarySearch = function(left,right,nums,target){
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        let binVal = nums[mid];
        if(binVal === target){
            return mid;
        }
        else if(binVal < target){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
        
    }
    return -1;
}