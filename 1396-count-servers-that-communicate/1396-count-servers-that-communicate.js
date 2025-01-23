/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let count = 0; 
    let rowCount = new Array(rows).fill(0);
    let colCount = new Array(cols).fill(0);

for (let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
        if(grid[i][j] === 1){
            rowCount[i]++;
            colCount[j]++;
        }
    }
}

for( let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
        if(grid[i][j] === 1 && (rowCount[i] > 1 || colCount[j] > 1) ){
            count++;
        }
    }
}

return count
};