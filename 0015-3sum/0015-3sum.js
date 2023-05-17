/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    ///cretaes an empty array for the sum
    let newArray = [];
    //initilaize position of left
    let left = 0;
    //initialize the position  of right
    let right = nums.length-1;
    // if the length of nums is less than 3
    if(nums.length < 3){
        return newArray;
    }
    //sort nums
    nums.sort((a,b)=>
              {return a-b});
    
    for(let [index, num] of nums.entries()){
        //checks if the first num > 0 cos the other nums will be gretaer than it and that wont lead to a sum of 0
        if(num > 0){
            return newArray;
        }
        //checks if the current num is not equal to the previous
        if(num === nums[index-1]){
            continue;
        }
        left = index+1;
        right = nums.length-1;
        let temp = 0;
        //while left position is less than right
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
            //sum too big
            else if (temp > 0){
                right--
            }
            //sum too small
            else if (temp < 0){
                left++
            }
        }
    }
    return newArray
    
};