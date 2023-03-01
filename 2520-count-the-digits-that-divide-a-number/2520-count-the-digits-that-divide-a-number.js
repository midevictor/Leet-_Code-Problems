/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    return Array.from(num.toString()).filter(n => num % n === 0).length;
    
};