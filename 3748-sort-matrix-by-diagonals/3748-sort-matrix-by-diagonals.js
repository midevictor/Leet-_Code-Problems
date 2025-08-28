/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function(grid) {
// get the matrix in a diagonal iteration
// start with the eft half to include the bmiddle diagonal, the the right   half
// sort the matrix for each diagonal
// return grid

// let temp1 = [];
// let temp2 = [];
for(let i = 0; i < grid.length; i++){
    let temp1 = [];
    for(let j = 0; i + j < grid.length; j++){
       temp1.push(grid[i+j][j]);
    }
    temp1.sort((a,b) => b-a);
    for(let j = 0; i + j < grid.length; j++){
        grid[i+j][j] = temp1[j];
    }    
}

for(let j = 1; j < grid.length; j++){
    let temp2 = [];
    for(let i = 0; i + j < grid.length; i++){
        temp2.push(grid[i][j+ i]);
    }
    temp2.sort((a,b) => a-b);
    for(let i = 0; i + j < grid.length; i++){
        grid[i][j+i] = temp2[i]
    }
}
return grid;
    
};