/**
 * @param {number} num
 * @return {boolean}
 */
var sumOfNumberAndReverse = function(num) {
    
        if(!num) return true;
    for(let i = 0; i < num; i++){
        let reverse = i.toString().split("").reverse().join("");
        if((+i + +reverse) === num) return true;
    }
    
    return false;
    
};