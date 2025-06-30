/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];
    backtrack( "", 0, 0 ,n);
    return result;

    function backtrack( curr, open , close, m){
        if(curr.length === 2 * m){
            result.push(curr);
        }
        if(open < n){
            backtrack( curr + "(", open + 1, close, m);
        }
        if(close < open){
            backtrack( curr + ")", open, close + 1 ,m);
        }
    }
    
};