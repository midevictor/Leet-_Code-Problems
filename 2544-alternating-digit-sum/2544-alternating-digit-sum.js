/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let arr = n.toString().split('');
    return arr.reduce((acc,val,i) => acc += i % 2 === 0 ? +val : -val, 0);
    
};