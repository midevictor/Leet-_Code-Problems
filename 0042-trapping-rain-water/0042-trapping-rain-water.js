/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
//     let totalWater = 0;
//     for(let p = 0; p<height.length; p++){
//         let leftP = p;
//         let rightP = p;
//         let maxRight = 0;
//         let maxLeft = 0;

//         while(leftP >= 0){
//             maxLeft = Math.max(maxLeft, height[leftP])
//             leftP--;
//         }
//          while(rightP < height.length){
//             maxRight = Math.max(maxRight, height[rightP])
//             rightP++;
//         }

//         const currentWater = Math.min(maxLeft, maxRight) - height[p];
//         if (currentWater >= 0){
//             totalWater += currentWater;
//         }
//     }
//     return totalWater;
    
    //OPTIMIZED
    let left = 0;
    let right = height.length-1;
    let totalWater = 0;
    let maxLeft = 0;
    let maxRight = 0;
    
    while(left <= right){
        if(height[left] <= height[right]){
            if(height[left] >= maxLeft){
                maxLeft = height[left]
            }
            else{
                totalWater += maxLeft - height[left];
            }
            left++;
        }
        else{
           if(height[right] >= maxRight){
                maxRight = height[right]
            }
            else{
                totalWater += maxRight - height[right];
            }
            right--;
        }                
    }
    return totalWater;
};
//using two pointers
//get the lesser one of both pointers
//condition
  //is the pointer value less than or equal to the max on the lesser pointer
      //yes? update new max
      //no? get water for pointer value, add to total
// move pointer inwards(lesser pointer)
// repeat for the other pointer(else condition)