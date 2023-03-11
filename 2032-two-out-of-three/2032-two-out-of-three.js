/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let res = [];
    
    nums1.forEach(x => ((nums2.includes(x) || nums3.includes(x)) && !res.includes(x)) && res.push(x));
    
    nums2.forEach(x => (nums3.includes(x) && !res.includes(x)) && res.push(x));
                  
    return res;              
    
};

