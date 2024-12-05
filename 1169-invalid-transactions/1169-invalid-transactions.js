/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    let invalid = new Set();
    let partitionedTnx = [];
    
    for(let i = 0;  i <transactions.length; i++){
        const [name, time, amount, city] = transactions[i].split(",");
        partitionedTnx.push({
            index: i,
            name,
            time: parseInt(time),
            amount: parseInt(amount),
            city
        });
        
    }
    console.log(partitionedTnx);
    
    for(let i = 0; i < partitionedTnx.length; i++){
        const {name: name1, time: time1, amount: amount1, city: city1} = partitionedTnx[i];
        if(amount1 > 1000){
            invalid.add(i)
        }
        for(let j = 0; j < partitionedTnx.length; j++){
        const {name: name2, time: time2, amount: amount2, city: city2} = partitionedTnx[j];
            if(name1 === name2 && city1 !== city2 && Math.abs(time1 - time2 ) <= 60){
                invalid.add(i);
                invalid.add(j);
            }
            
        }
      
        
    }
    return Array.from(invalid).map(index => transactions[index])
    
};