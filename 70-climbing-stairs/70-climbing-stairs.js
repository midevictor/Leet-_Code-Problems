/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let def1 = 1;
    let def2 = 1;
    
    for(let i = 2; i <= n; i++){
        const temporary = def1;
        def1 = def1 + def2;
        def2 = temporary;
    }
    return def1;
    
};