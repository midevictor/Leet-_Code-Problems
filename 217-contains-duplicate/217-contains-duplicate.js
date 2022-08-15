/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //Created a new set
const set1 = new Set();
   for(let num of nums){
       if(set1.has(num)){
           return true;
       }
       else{
          set1.add(num);
       }
   }
    return false;
       
    
};