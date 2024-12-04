/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let list = Array.from({length:n}, (_, i) => i+1);
    let index = 0;
    
    
    while(list.length > 1){
        index = (index + (k-1)) % list.length //incase their is an overlap around the friend list
        
        list.splice(index, 1);
    }
    return list[0];
};