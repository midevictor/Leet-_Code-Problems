/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [];
    let processedPath = path.split("/");
    console.log(processedPath);
    for(let dir of processedPath){
        if(dir === ".."){
            if(stack.length){
                stack.pop();
            }
        } else if(dir === "." || dir === "" ){
            continue;
        } else{
            stack.push(dir);
        }
       
    }
    return "/" + stack.join("/")
    
};