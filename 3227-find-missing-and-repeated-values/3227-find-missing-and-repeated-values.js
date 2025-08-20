/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let total = m  * n;
    let count = new Array(total + 1).fill(0);

    for (let row of grid){
        for (let num of row){
            count[num]++
        }
    }
    let missingNum = -1;
    let doubleNum = -1;

    for(let i = 0; i < count.length; i++){
        if(count[i] === 0){
            missingNum = i
        }
        if(count[i] === 2){
            doubleNum = i;
        }
    }

    return [doubleNum, missingNum];
    
};