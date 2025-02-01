/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    const isEven = (num) => {
        if( num % 2 === 0){
             return true
        }    
       
    }

    const isOdd = (num) => {
        if(num % 2 !== 0){
            return true
        }
    }
    // if(nums.length <= 1){
    //     return true;
    // }

    for(let i = 0; i < nums.length - 1; i++){
        if((isEven(nums[i]) && isEven(nums[i + 1])) || (isOdd(nums[i]) && isOdd(nums[i + 1]))){
            return false
        }
        
    }

    return true;
    
};