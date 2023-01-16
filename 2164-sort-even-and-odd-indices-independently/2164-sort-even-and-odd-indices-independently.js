/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    const even = [];
    const odd = [];
    let num = 1;
    
    for (const x in nums) {
        if (x%2 == 0) {
             even.push(nums[x])
        } else {
           odd.push(nums[x]) 
        }
    }

    even.sort((a,b) => a - b)
    odd.sort((a,b) => b - a)
    // This code is using a for-loop to iterate over the elements of the "odd" array. For           each element in the "odd" array, it is using the splice method to insert the element          at a specific index in the "even" array. The index is determined by the "num"                variable, which is incremented by 2 after each iteration of the loop. This means            that the first odd element will be inserted at index 0, the second odd element will             be inserted at index 2, and so on.

    for (const y in odd) {
         even.splice(num , 0, odd[y])
         num+=2
    }
 
    return even;

    
};