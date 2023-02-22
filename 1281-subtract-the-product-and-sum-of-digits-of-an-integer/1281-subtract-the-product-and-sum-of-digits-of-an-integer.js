/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    return (String(n).split('').reduce((a, b) => Number(a) * Number(b))) - (String(n).split('').reduce((a, b) => Number(a) + Number(b)))
    
};