/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let total = 0
    let numEmpty = 0 
    while (numBottles || numEmpty >= numExchange) {
        total+= numBottles
        numEmpty+=numBottles 
        numBottles = Math.floor(numEmpty / numExchange)
        numEmpty = numEmpty % numExchange 
    }
    return total
    
};