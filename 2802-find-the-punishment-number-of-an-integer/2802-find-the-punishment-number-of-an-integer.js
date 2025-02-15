/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) { 
        let sqr = (i * i).toString();
        
        if (isPunishmentNumber(i, sqr)) {
            sum += i * i; 
        }
    }

    return sum;
};


function isPunishmentNumber(num, sqr, start = 0, currentSum = 0) {
    if (start === sqr.length) {
        return currentSum === num;
    }

    for (let j = start + 1; j <= sqr.length; j++) {
        let part = Number(sqr.slice(start, j));
        if (isPunishmentNumber(num, sqr, j, currentSum + part)) {
            return true;
        }
    }

    return false;
}