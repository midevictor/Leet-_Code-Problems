/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let row = board.length;
    let col = board[0].length;

    let count = 0;

    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(board[i][j] === "X"){
                if(i > 0 && board[i-1][j] === "X"){
                    continue;
                }
                if(j> 0 && board[i][j-1] === "X"){
                    continue;
                }
                count++;

            }
        }
    }
    return count;
};