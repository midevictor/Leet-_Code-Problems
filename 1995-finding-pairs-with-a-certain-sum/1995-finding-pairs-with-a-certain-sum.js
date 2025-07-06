/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function(nums1, nums2) {
    this.nums1 = nums1;
    this.nums2 = nums2;
    this.counterMap = new Map();
    for (let num of nums2){
        this.counterMap.set(num, ((this.counterMap.get(num)) || 0) + 1);
    }

    
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
    let oldval = this.nums2[index];
    this.counterMap.set(oldval, ((this.counterMap.get(oldval)) || 0) - 1);
    this.nums2[index] += val;
    let newval = this.nums2[index]
     this.counterMap.set(newval, ((this.counterMap.get(newval)) || 0) + 1);

    
};

/** 
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
    let counter = 0;
    for(let num of this.nums1){
        let result = tot - num;
        counter = counter + (this.counterMap.get(result) || 0)
    }
    return counter

    
};

/** 
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */