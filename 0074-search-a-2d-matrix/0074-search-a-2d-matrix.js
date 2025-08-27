/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = matrix.length;
    let col = matrix[0].length;


    //Search through the row
    let top = 0;
    let bottom = row-1 ;
    let targetRow = -1;
    while(top <= bottom){
        let mid = Math.floor((top + bottom) / 2);
        if( target >= matrix[mid][0]  && target <= matrix[mid][col - 1]){
            targetRow = mid;
            break;
        }
        else if(matrix[mid][0] > target){
            bottom = mid - 1;
        }
        else{
            top = mid + 1
        }
       
    }
     if(targetRow === -1){return false;}

    //After getting the row, now get the col;

    let left = 0;
    let  right = col - 1;
    while(left <= right){
        let mid = Math.floor((left + right ) / 2);
        if(matrix[targetRow][mid] === target){
            return true;
        }else if(matrix[targetRow][mid] < target){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
     

    // let left = 0;
    // let right = row * col - 1;
    // while(left <= right){
    //     let pivot = Math.floor((left + right) / 2 );
    //     let eachIndexMatrix = matrix[Math.floor(pivot / col)][pivot % col];
    //     if(target === eachIndexMatrix){
    //         return true
    //     }else{
    //         if(target < eachIndexMatrix){
    //             right = pivot - 1;
    //         }else{
    //             left = pivot + 1;
    //         }
    //     }
      
    // }
    //   return false;    
};