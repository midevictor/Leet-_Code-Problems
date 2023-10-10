/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    let size = matrix.length;
    
    for(let i = 0; i < size; i++ ){
        let rowSet = new Set();
        let columnSet = new Set();
        for(let j = 0; j < size; j++){
            let row  = matrix[i][j];
            let column = matrix[j][i];
            if(rowSet.has(row)){
                return false;
            }
            if(columnSet.has(column)){
                return false;
            }
            rowSet.add(row);
            columnSet.add(column);
        }
    }
    return true;
};