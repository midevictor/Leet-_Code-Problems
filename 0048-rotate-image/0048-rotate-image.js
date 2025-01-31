/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    
    for(let i = 0; i < row; i++){
        for(let j = i+1; j < col; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i] , matrix[i][j]];
        }
    }
    
    for(let j = 0; j<row; j++ ){
        matrix[j] = matrix[j].reverse();
    }
    
    return matrix;
};