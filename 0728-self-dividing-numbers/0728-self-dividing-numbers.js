/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let newArray = [];
    for(let i = left; i <= right; i++){
        let j = i;
        while(j){
            if((i) % (j % 10) !== 0 || (j%10)===0){
                break;
            }
            j = Math.floor(j/10);
            if(j === 0)
                newArray.push(i);
        }
        
    }
    return newArray;
};
