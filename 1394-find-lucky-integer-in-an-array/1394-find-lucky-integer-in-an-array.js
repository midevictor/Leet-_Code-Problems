/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let newMap = new Map();
    for (let i = 0; i < arr.length;  i++){
        newMap.set(arr[i], (newMap.get(arr[i]) || 0 ) + 1);
   
    }
    let max = -1;
    for( let [key, value] of newMap){
        if(key == value){
            max = Math.max(max, value);
        }
    }
    
    return max;
};
   