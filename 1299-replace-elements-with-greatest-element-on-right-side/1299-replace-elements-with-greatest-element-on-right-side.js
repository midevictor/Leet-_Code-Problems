/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
let max = arr[arr.length - 1];
     for(let i =arr.length - 1; i >= 0; i--){
         const current = arr[i];
         arr[i] = max;
         max = Math.max(current, max);

     }
    arr[arr.length-1] = -1;
    return arr;
    
};