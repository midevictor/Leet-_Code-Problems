/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minimumPrice = prices[0];
    let profit = 0;

    for( let i = 0; i < prices.length; i++){
        if(prices[i] < minimumPrice){
            minimumPrice = prices[i];
        }
        else if((prices[i] - minimumPrice) > profit){
            profit = prices[i] - minimumPrice;
        }
    }
    return profit;
    
};
// initializes the minimum price to the first number in the price array
// let count = 0;
//loop through the array
// if prices at te array is less than min price, make it the new min price
// else calc profit