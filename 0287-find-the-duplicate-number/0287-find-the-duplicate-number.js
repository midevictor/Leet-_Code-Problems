/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = 0;
    let fast = 0;
    let init = 0;
    
    while(true){
        slow = nums[slow];
        fast = nums[nums[fast]];
        if(slow === fast) break
    }
    
    while(true){
        slow = nums[slow];
        init = nums[init];
        if(slow === init) break;
    }
    
    return slow;

};
    // // Initialize an empty Set
    // const seen = new Set();
    // // Iterate through each number in nums
    // for (let num of nums) {
    //     // Check if the number is already in the Set
    //     if (seen.has(num)) {
    //         return num; // Duplicate found
    //     }
    //     // Add the number to the Set
    //     seen.add(num);
    // }
    // // In case there is no duplicate (not expected in this problem)
    // return -1;