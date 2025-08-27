/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = matrix.length;
    let col = matrix[0].length;

    let left = 0;
    let right = row * col - 1;
    while(left <= right){
        let pivot = Math.floor((left + right) / 2 );
        let eachIndexMatrix = matrix[Math.floor(pivot / col)][pivot % col];
        if(target === eachIndexMatrix){
            return true
        }else{
            if(target < eachIndexMatrix){
                right = pivot - 1;
            }else{
                left = pivot + 1;
            }
        }
      
    }
      return false;    
};