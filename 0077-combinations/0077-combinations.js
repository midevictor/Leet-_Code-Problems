/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = [];
    function dfs (index, curr){
        if(curr.length === k ){
            result.push([...curr]);
        }
        for(let i = index; i <= n; i++){
            curr.push(i);
            //recursion
            dfs(i+1, curr);
            //backtrack
            curr.pop();
        }
        
    }
    dfs(1, []);
    return result;
    
};