/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length < 3){
        return [];
    }
    let output = []
    nums.sort((a,b) => a-b);
    for(let i = 0; i < nums.length; i++){
        let left = i+1;
        let right = nums.length-1;
        if(nums[i] > 0){
            return output;
        } 
        if(nums[i] === nums[i-1]){
            continue;
        }
        let sum = 0;
        while(left < right){
            sum = nums[i] + nums[left] + nums[right];
            if(sum === 0){
                output.push([nums[i] , nums[left] ,nums[right]]);
                left++;
                right--
                while(left < right && nums[left] === nums[left-1]){
                    left++;
                }
                while(left < right && nums[right] === nums[right+1]){
                    right--;
                }

            }
            else if(sum > 0){
                right--;
            }
            else if(sum < 0){
                left++;
            }
        }
    }
    return output;
    
};