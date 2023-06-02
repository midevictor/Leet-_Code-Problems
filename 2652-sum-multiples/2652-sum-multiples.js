/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
   var sum = 0

    for (var i = 1; i <= n; i++){
        var divisible = false
        divisible = divisible || i%3 == 0 || i%5 == 0 || i%7 == 0
        if(divisible){
            sum = sum + i
        }
    }

    return sum
};