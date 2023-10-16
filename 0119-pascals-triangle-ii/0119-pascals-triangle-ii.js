/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const lastIndexed = [];
    for (let i = 0; i <= rowIndex; i++){
        let currIndexed = [];
        let currNum = 1;
        for(let j = 0; j <= i; j++){
            currIndexed.push(currNum);
            //calc the next number
            currNum = currNum * (i-j) / (j+1);
        }
        lastIndexed.push(currIndexed);
    }
    return lastIndexed[lastIndexed.length-1];
    
};


// const result = [];   // Array to store the generated Pascal's triangle rows
//     for(let i=0; i<=rowIndex; i++){
//         let row = [];     // Array to store the numbers in the current row
//         let num = 1;     // Array to store the numbers in the current row
//         for(let j=0; j<=i; j++){
//             row.push(num);   // Add the current number to the row array
//             num = num * (i-j) / (j+1);    // Calculate the next number using the binomial coefficient formula
//         }
//         result.push(row)          // Add the current row to the result array
//     }
//     return result[result.length-1];   // Return the last row of Pascal's triangle