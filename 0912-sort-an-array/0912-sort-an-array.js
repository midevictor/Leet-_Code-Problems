/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
//     if(nums.length <= 1) return nums;
//     let leftArray = [];
//     let rightArray = [];
//     let pivot = nums[nums.length-1];
    
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] < pivot){
//             leftArray.push(nums[i]);
//         }
//         if(nums[i] > pivot){
//            rightArray.push(nums[i]); 
//         }
//      }
//     // console.log(leftArray)
//      //console.log(rightArray)
//         //divide and conquer
//         if(leftArray.length !== 0 && rightArray.length !== 0  ){
//             return [...sortArray(leftArray), pivot, ...sortArray( rightArray)]
//         }else if(leftArray.length > 0){
//              return [...sortArray(leftArray), pivot]
//         }
//         else{
//             return [ pivot, ...sortArray( rightArray)]
//         }
    var n = nums.length;
    for (var i = 0; i <n-1; i++) {
        var min = i;
        for (var j = i+1; j < n; j++ ) {
            if (nums[j] < nums[min]) {
                min = j;    
            }
        }
        var temp = nums[i];
        nums[i] = nums[min];
        nums[min] = temp;
    }
    return nums;

};