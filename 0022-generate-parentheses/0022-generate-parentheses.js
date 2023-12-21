/**
 * @param {number} n
 * @return {string[]}
 */

const isValid = (str) => {
    const stack = [];
    let i = 0;
    let len = str.length;
    
    while(i < len){
        let currentParent = str[i]
        stack.push(currentParent);
        let open = stack[stack.length - 2];
        let closed = stack[stack.length - 1]
        if(open + closed === "()"){
            stack.pop();
            stack.pop();
        }
        i++;
    }
    return stack.length === 0;
}
var generateParenthesis = function(n) {
    //backtracking just to aviod going through the whole length of the tree
    let result = [];
    const dfs = (i, n, slate) => {
        if(i === n*2){
            //at the last levels, call the isValid function to validate each children at the last level()
            if(isValid(slate.join(""))){
                result.push(slate.join(""))
            }
            return ""
            
        }
        
        // dfs Recursive call
        //add open paranthesis
        slate.push("(")
        dfs(i+1, n, slate)
        slate.pop()
        //add closed parenthesis
        slate.push(")")
        dfs(i+1, n, slate)
        slate.pop()
    }
    
    dfs(0,n,[]);
    return result;
    
    
};