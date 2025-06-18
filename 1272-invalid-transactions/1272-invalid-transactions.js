var invalidTransactions = function(transactions) {
    let result = [];

    for (let i = 0; i < transactions.length; i++) {
        let [name1, time1, amount1, city1] = transactions[i].split(",");
        time1 = parseInt(time1);
        amount1 = parseInt(amount1);

        let isInvalid = false;

        // Rule 1: amount > 1000
        if (amount1 > 1000) {
            isInvalid = true;
        }

        // Rule 2: other transaction with same name, different city, and time difference <= 60
        for (let j = 0; j < transactions.length; j++) {
            if (i === j) continue;

            let [name2, time2, , city2] = transactions[j].split(",");
            time2 = parseInt(time2);

            if (name1 === name2 && city1 !== city2 && Math.abs(time1 - time2) <= 60) {
                isInvalid = true;
                break;
            }
        }

        if (isInvalid) {
            result.push(transactions[i]);
        }
    }

    return result;
};
