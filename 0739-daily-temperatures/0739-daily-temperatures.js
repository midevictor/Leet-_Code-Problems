/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temp) {
    
    if(temp.length === 0){
        return []
    }
    let stack = [];
    let result = new Array(temp.length).fill(0);
    
    
    
    for(let i = temp.length-1; i >= 0; i--){
        while(stack.length && temp[stack[stack.length-1]] <= temp[i]){
            stack.pop();
        }
        if(stack.length){
            result[i] = stack[stack.length-1] - i;
        }
        
        stack.push(i);   
    }
    
    return result
    
};