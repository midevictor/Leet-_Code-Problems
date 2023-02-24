/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(arr, target) {
    // nums.sort((a,b) => a-b);
    // let result = [];
    // if(nums.length < 4){
    //     return result;
    // }
    // for (let i = 0; i< nums.length - 3; i++){
    //     if(i > 0 && nums[i] === nums[i-1]) continue
    //     for (let j = i+1; j < nums.length-2; j++){
    //          if(j > i + 1 && nums[j] === nums[j-1]) continue
    //         let currentSum = nums[i] + nums[j];
    //         let otherNums = target - currentSum;
    //         let left = j+1; 
    //         let right = nums.length-1;
    //         while(left < right){
    //             if(nums[left] + nums[right] === otherNums){
    //                 result.push(nums[i], nums[j], nums[left], nums[right]);
    //                 while(nums[left] === nums[left + 1])left++;
    //                 while(nums[right] === nums[right - 1])right--;
    //                 left++
    //                 right--
    //             }
    //             else if( nums[left] + nums[right] > otherNums){
    //                 right--
    //             }
    //             else{
    //                 left++;
    //             }
    //         }
    //     }
    // }
    // return result;
  arr.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < arr.length - 3; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) continue;
    for (let j = i + 1; j < arr.length - 2; j++) {
      if (j > i + 1 && arr[j] == arr[j - 1]) continue;

      let currentSum = arr[i] + arr[j];
      let find = target - currentSum;
      let left = j + 1;
      let right = arr.length - 1;
      while (left < right) {
        if (arr[left] + arr[right] == find) {
          result.push([arr[i], arr[j], arr[right], arr[left]]);
          while (arr[left] == arr[left + 1]) left++;
          while (arr[right] == arr[right - 1]) right--;
          right--;
        } else if (arr[left] + arr[right] > find) {
          right--;
        } else {
          left++;
        }
      }
    }
  }
  return result;
            
};