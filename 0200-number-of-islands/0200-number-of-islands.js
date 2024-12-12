/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let row = grid.length;
    let col = grid[0].length;
    let numberofIsland = 0;
    
    if(!grid || grid.length === 0){
        return null;
    } 
    
     const dfs = (i, j) => {
    if(i < 0|| i > grid.length - 1 ||j < 0 || j > grid[0].length -1 || grid[i][j] === "0"){
        return ;
    }
    grid[i][j] = "0";
    dfs(i-1, j); //up
    dfs(i, j+1); //right
    dfs(i+1, j); //down
    dfs(i, j-1); //left
}


    for (let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(grid[i][j] === "1"){
                numberofIsland++;
                dfs(i, j)
            }
        }
    }
    
    return numberofIsland;
    
    
    
};


