/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalGas = 0;
    let totalCost = 0;
    let totalSum = 0;
    let start = 0;

    for(let i = 0; i < gas.length; i++){
        let net = gas[i] - cost[i];
        totalGas = totalGas + gas[i];
        totalCost = totalCost + cost[i];
        totalSum = totalSum + net

        if(totalSum < 0){
            start = i + 1;
            totalSum = 0;
        }
    }

    if(totalGas >= totalCost ){return start}

    return -1;

    
};