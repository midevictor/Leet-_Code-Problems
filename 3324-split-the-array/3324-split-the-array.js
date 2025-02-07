/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    let stack1 = [];
    let stack2 = [];
    let map = new Map();

    for(let num of nums){
        map.set(num, (map.get(num)|| 0 ) + 1 );
        if(map.get(num) > 2) {
            return false;
        }
    }

    for(let num of nums){
        if(stack1.includes(num)){
            stack2.push(num)
        }else  if(stack1.length < nums.length/2){
            stack1.push(num);
        }else{
            stack2.push(num);
        }
    }

    return stack1.length = stack2.length


    
};