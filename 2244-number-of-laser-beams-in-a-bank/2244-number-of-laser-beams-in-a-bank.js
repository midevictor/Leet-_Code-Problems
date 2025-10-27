/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let prevBeams = 0;
    let totalBeams = 0;

    for(let row of bank){
        let currBeams = row.split("").filter(c => c === "1").length;
        if(currBeams > 0){
            totalBeams += currBeams * prevBeams;
            prevBeams = currBeams;
        }
    }
    return totalBeams;
    
};