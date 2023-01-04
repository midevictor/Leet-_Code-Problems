/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    //defined a new array and set the length to numRows
    let Pascal = new Array(numRows);
    //run a for loop on the array
    //console.log(Pascal);
    for(let i = 0; i < numRows; i++){
        //define a new array and set the length to 1
        let row = new Array(i+1);
        //set the first index to 1
        row[0] = 1;
        //set the last index to 1
        row[row.length - 1] = 1;
         
        for (let j = 1; j < row.length-1; j++){
            let prevRow = Pascal[i-1];
            row[j] = prevRow[j] + prevRow[j-1];
        }
        Pascal[i] = row;
    }
    return Pascal;
    
};