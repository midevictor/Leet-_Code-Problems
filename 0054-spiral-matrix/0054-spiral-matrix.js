/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = []
    if(matrix.length === 0 ) return res;
    
    let top = 0;
    let left = 0;
    let bottom = matrix.length - 1;
    let right = matrix[0].length - 1;
    
    
    while (top <= bottom && left <= right){
        //traverse top
        for(let i = left; i <= right; i++){
            res.push(matrix[top][i]);
        }
        top++;
        
        //traverse right
        for(let i = top; i <= bottom; i++){
            res.push(matrix[i][right]);
        }
        right--;
        
        //traverse bottom
        if(top <= bottom){
            for(let i = right; i >= left; i-- ){
                res.push(matrix[bottom][i])
            }
            bottom--
        }
        //traverse left
        if(left <= right){
            for(let i =bottom;  i >= top; i--){
                res.push(matrix[i][left]);
            }
            left++;
        }
    }
    return res;
    
};