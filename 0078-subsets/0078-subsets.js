/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let outputArray = [];

    function backtrack(start, currArr){
        outputArray.push([...currArr]);
        for(let i = start; i < nums.length; i++){
            currArr.push(nums[i]);
            backtrack(i + 1, currArr);
            currArr.pop();
        }

    }

    backtrack(0, []);
    return outputArray;
    
};