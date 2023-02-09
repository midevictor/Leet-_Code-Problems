/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    // let total = 0;
    // let numEmpty = 0 ;
    // while (numBottles || numEmpty >= numExchange) {
    //     total+= numBottles;
    //     numEmpty+=numBottles; 
    //     numBottles = Math.floor(numEmpty / numExchange);
    //     numEmpty = numEmpty % numExchange;
    // }
    // return total;   
    let maxDrink = numBottles;
    let remainder = 0;
    while(numBottles >= numExchange){
        remainder = numBottles % numExchange;
        numBottles  = Math.floor( numBottles / numExchange);
        maxDrink += numBottles;
        numBottles += remainder;
        
    }
    return maxDrink;
};
// create a variable for max drink
//create a varible for remainder
// a while loop( numBotttles >= numExchange)
// remainder = numBottle  mod numExchange
// numBottles / numExchange
// add remainder to numBottles
// return max Drink