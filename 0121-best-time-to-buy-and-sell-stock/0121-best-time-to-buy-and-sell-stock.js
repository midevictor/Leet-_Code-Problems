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