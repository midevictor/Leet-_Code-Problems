/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    //created a new set
    let set = new Set();
    //used a for loop to check each number in the array
    for(let i = 0; i < nums.length; i++){
        //if the length of the array is less than or equal to 1 return false
        if(nums === 1){
            return false;
        }
        //check if the new set created has the nums, return true
        if (set.has(nums[i])){return true;}
        //else return add the nums to the new set created
        else{
            set.add(nums[i]);
        }
        if(set.size > k){
            set.delete(nums[i - k]);
        }
    }
    return false;
};