/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];
    
    for(let i = 0; i < asteroids.length; i++){
        if(stack.length === 0 || asteroids[i] > 0){
            stack.push(asteroids[i])
        }
        else{
            while(stack.length > 0 && stack[stack.length -1] > 0 && stack[stack.length -1] < Math.abs(asteroids[i])){
                stack.pop();
            }
        
        
        if(stack.length > 0 && stack[stack.length -1] === Math.abs(asteroids[i])){
            stack.pop();
        }
        else{
            if(stack.length === 0 || stack[stack.length -1] < 0 ){
                stack.push(asteroids[i]);
            }
        }
        }      
        // console.log(stack)
    }
    
    
    const finalArray = new Array(stack.length)
    for(let i = stack.length -1; i >= 0; i--){
        finalArray[i] = stack.pop()
    }
    
    return finalArray;
};
// thought process
// using stacks:
//   1)if the current asteriod is positive or the stack is empty , push the current asteriod
//   2)if the current asetriod is negative
//         a) if the top of stack is negative , nothing will happen: push the current asteriod               to the stack  
//         b)if the top of the stack is postive and has a gretarer magnitude, move to the next             asteriod
//         c)if the top of the stack is positive and has a lesser magnitude, pop the top of                the stack and push the curent asteriod to the stack
    