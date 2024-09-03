/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    
    const onlyInnums1 = [...set1].filter(num => !set2.has(num));
    const onlyInnums2 = [...set2].filter(num => !set1.has(num));
    
    return [onlyInnums1, onlyInnums2]    
};

// basic idea , first approach
// ** I am thinking of looping through the first array and check if any number exist in the second array
// ** if yes, remove it from the array, if no continue
// ** same withe second array