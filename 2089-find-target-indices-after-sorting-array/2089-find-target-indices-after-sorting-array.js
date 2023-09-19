/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//  var targetIndices = function(nums, target) {
//     nums = nums.sort((a,b) => a-b);
//     if(nums.length === 0){
//         return [-1, -1];
//     }
   
//     const firstPos = binarySearch(0, nums.length - 1, nums, target);
    
//     if(firstPos === -1){
//         return [];
//     }
    
//     let startPos = firstPos;
//     let endPos = firstPos;
//     let temp1;
//     let temp2;
//     let indices = [];
//     // indices.push(firstPos);


//     while(startPos !== -1){
//         indices.push(startPos);
//         temp1 = startPos;
//         startPos = binarySearch(0, startPos - 1, nums, target);
       
//     }
//     startPos = temp1;
//      while(endPos !== -1){
//         temp2 = endPos;
//         endPos = binarySearch(temp2 + 1, nums.length - 1, nums, target);
//           indices.push(endPos);
         
        
//     }
//    endPos = temp2;

//        if (startPos === endPos) {
//         return [startPos];
//     }
//           return [startPos,  endPos];
 
// };

// const binarySearch = function(left,right,nums,target) {
//     while(left <= right){
//         let mid = Math.floor((left+right)/2);
//         let binVal = nums[mid];
//         if(binVal === target){
//             return mid;
//         }
//         else if(binVal < target ){
//             left = mid + 1;
//         }
//         else{
//            right = mid - 1; 
//         }
//     }
    
//     return -1;
    
// }
var targetIndices = function(nums, target) {
    let result = [];
    if(!nums.includes(target)) return result;
    
    let sortedArr = nums;
    sortedArr.sort((a,b) => a-b);
    let left = 0;
    let right = sortedArr.length-1;
    let start = -1;
    let end = -1;

    while(left <= right){
        let mid = Math.round((right + left) / 2);
        if(sortedArr[mid] === target){
            start = mid-1;
            end = mid+1;

            result.push(mid)
            while(sortedArr[start] === target){
                result.push(start)
                start -= 1
            }
            while(sortedArr[end] === target){
                result.push(end)
                end += 1
            }
            break;
        }else if(sortedArr[mid] < target){
            left = mid+1;
        }else if(sortedArr[mid] > target){
            right = mid-1;
        }
    }
    return result.sort((a,b) => a-b)
};