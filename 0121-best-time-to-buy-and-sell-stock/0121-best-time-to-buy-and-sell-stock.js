/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // let max = 0;
    // for(let i = 0; i < prices.length; i++){
    //     for(let j = i + 1; j < prices.length; j++){
    //         if(prices[i] > prices[j]){
    //             continue;
    //         }
    //         max = Math.max(max, prices[j]-prices[i]);
    //     }
    // }
    // return max;

    let min = prices[0];
    let profit = 0;
    for(let i = 1; i < prices.length; i++){
        if(prices[i] < min){
            min = prices[i];
        }
        else if(prices[i] - min > profit){
            profit = prices[i] - min;

        }
    }
    return profit;
    
};