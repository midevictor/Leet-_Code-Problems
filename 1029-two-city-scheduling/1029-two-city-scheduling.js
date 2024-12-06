/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs.sort((a,b) => (a[0] - a[1]) - (b[0] - b[1]));
    let len = costs.length / 2;
    let minCost = 0;
    
    for(let i = 0; i < len; i++){
        minCost += costs[i][0];
    }
    for(let i = len; i < 2*len; i++){
        minCost += costs[i][1];
    }
    
    return minCost;
    
};