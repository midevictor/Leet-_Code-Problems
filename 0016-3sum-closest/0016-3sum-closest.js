/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    //store the first three sum for comparision
    let closestTarget =  nums[0] + nums[1] + nums[nums.length - 1];

    //sort the array from the smallest to largest
    const sortedNums =  nums.sort((a,b) => a - b);
    
    //loop through the sorted arrays
    for(let i = 0; i <= sortedNums.length - 2; i++){
        left = i + 1;
        right = sortedNums.length - 1;
        while(left < right){
           const subTotal = sortedNums[left] + sortedNums[right] + sortedNums[i];
        

        //check for the answer
        if(subTotal == target){
            return subTotal;
        }
         else if(subTotal < target){
           left++;
        }
         else{
           right--;
        }

        //check if the subToatal is the same with the closests taget
        if(Math.abs(subTotal - target) < Math.abs(closestTarget - target))
        {
            closestTarget = subTotal;
        }
    }
    }

  return closestTarget;   

};