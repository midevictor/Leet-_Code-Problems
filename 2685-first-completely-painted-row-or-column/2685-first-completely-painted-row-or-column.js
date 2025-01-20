/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
    let row = mat.length;
    let col = mat[0].length;

    let matrixMap = new Map();
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            matrixMap.set(mat[i][j], [i,j])
        }
    }
    // console.log(matrixMap);
    let rowCount = Array(row).fill(0);
    let colCount = Array(col).fill(0);

    for(let i = 0; i < arr.length; i++){
       const [r, c] = matrixMap.get(arr[i]);

       rowCount[r]++;
       colCount[c]++;

       if(rowCount[r] === col || colCount[c] === row ){
        return i;
       }

    }
    return -1;
    
};