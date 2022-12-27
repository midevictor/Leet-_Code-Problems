/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let newArray = [];
    let left = 0;
    let right = nums.length-1;
    if(nums.length < 3){
        return newArray;
    }
    nums.sort((a,b)=>
              {return a-b});
    
    for(let [index, num] of nums.entries()){
        if(num > 0){
            return newArray;
        }
        if(num === nums[index-1]){
            continue;
        }
        left = index+1;
        right = nums.length-1;
        let temp = 0;
        
        while(left < right){
            temp = num + nums[left]+ nums[right];
            
            if(temp === 0){
                newArray.push([num, nums[left], nums[right]])
                left++;
                right--;
                while(left < right && nums[left] == nums[left-1]){
                    left++
                }
                while(left < right && nums[right] == nums[right+1]){
                    right--
                }
            }
            else if (temp > 0){
                right--
            }
            else if (temp < 0){
                left++
            }
        }
    }
    return newArray
    
};