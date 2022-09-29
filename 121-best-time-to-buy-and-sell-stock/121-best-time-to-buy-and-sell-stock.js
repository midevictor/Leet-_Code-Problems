/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //dynamic programming
    // set minimum price to the first elemnt by default
    let minimumPrice = prices[0];
    // set the profit to zero by default
    let profit = 0;
    
    // a for loop to got through the array
    for (let i = 0; i < prices.length; i++){
        if(prices[i] < minimumPrice){
            minimumPrice = prices[i];
        }
        else if((prices[i] - minimumPrice) > profit ){
            profit = prices[i] - minimumPrice;
        }
        
    }
    return profit;
    
};