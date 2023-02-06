/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    //const row = [[], [], [], [], [], [], [], [], []];
    const row = Array(9).fill().map(()=> Array());
    const col = Array(9).fill().map(()=> Array());
    const box = Array(9).fill().map(()=> Array());
    
    for( let i = 0; i < 9; i++){
        for( let j = 0; j < 9; j++){
            //skip all cells with no value
            if(board[i][j] == "."){
                continue;
            }
            // for the 3x3 sub-boxes: index
            let k = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            row[i].push(board[i][j]);
            col[j].push(board[i][j]);
            box[k].push(board[i][j]);
            
            if (new Set(row[i]).size !== row[i].length ||new Set(col[j]).size !== col[j].length || new Set(box[k]).size !== box[k].length){
                return false;
            }
        }
        
    }
    return true;
};