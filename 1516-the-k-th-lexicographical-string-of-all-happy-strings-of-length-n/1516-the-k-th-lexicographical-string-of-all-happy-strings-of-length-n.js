/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    let  result = [];
    let chars = ["a", "b", "c"];

    function backtrack (curr){
        if(curr.length === n){
            result.push(curr);
            return
        }
        for(let ch of chars){
            if(curr.length === 0 || curr[curr.length - 1] !== ch){
                backtrack(curr + ch);

            }
        }

    }
    backtrack("");
    return result.length >= k ? result[k-1] : "";
    
};