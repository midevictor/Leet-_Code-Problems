/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    
    let firstRow = false;
    let firstCol = false;
    
    //check the first row
    for(j = 0; j < col; j++){
        if(matrix[0][j] === 0){
            firstRow = true;
            break
        }
    }
    //check the first col
    for(i = 0; i < row; i++){
        if(matrix[i][0] === 0){
            firstCol = true;
            break;
        }
    }
    
    for(let i = 1; i < row; i++){
        for(let j = 1; j < col; j++){
            if(matrix[i][j] === 0){
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for(let i = 1; i < row; i++){
        if(matrix[i][0] === 0){
            for(let j = 1; j < col; j++){
                matrix[i][j] = 0;
            }
        }
    }

    for(let j = 1; j < col; j++){
        if(matrix[0][j] === 0){
            for(let i = 1; i < row; i++){
                matrix[i][j] = 0;
            }
        }
    }
    if(firstRow){
        for(let j = 0; j < col; j++){
            matrix[0][j] = 0;
        }
    }
    if(firstCol){
        for(let i = 0; i < row; i++){
            matrix[i][0] = 0;
        }
    }
    

    
};