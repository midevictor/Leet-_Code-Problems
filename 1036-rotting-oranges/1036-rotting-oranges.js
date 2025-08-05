/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let row = grid.length;
    let col = grid[0].length;
    let queue = [];
    let goodFruits = 0;

    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(grid[i][j] === 2){
                queue.push([i,j])
            } else if(grid[i][j] === 1){
                goodFruits++;
            }
        }
    }
    let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    if(goodFruits === 0){
        return 0;
    }
    let minutes = 0;
    while(queue.length && goodFruits > 0){
        let length = queue.length;
        while(length--){
            const [ r, c] = queue.shift();
            for (const [a, b] of directions){
                let currR = r + a;
                let currC = c + b;

                if(currR >= 0 && currR < row && currC >= 0 && currC < col && grid[currR][ currC] === 1){
                    grid[currR][currC] = 2;
                    goodFruits--;
                    queue.push([currR, currC])
                }
            }
           
        }
         minutes++;
    }
    return goodFruits === 0 ? minutes : -1; 
};