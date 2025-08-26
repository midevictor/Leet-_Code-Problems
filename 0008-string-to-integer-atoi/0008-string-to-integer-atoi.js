/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let INT_MAX = Math.pow(2, 31) - 1;
    let INT_MIN = -1 * Math.pow(2, 31);

    
    s = s.trimStart();

    if (s.length === 0) return 0;

    
    let sign = 1;
    let i = 0;
    if (s[i] === '+' || s[i] === '-') {
        if (s[i] === '-') sign = -1;
        i++;
    }

    
    let numStr = '';
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        numStr += s[i];
        i++;
    }

    if (numStr === '') return 0;

    let num = sign * parseInt(numStr);

    
    if (num < INT_MIN) return INT_MIN;
    if (num > INT_MAX) return INT_MAX;

    return num;
};
