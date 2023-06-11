function isValid(s: string): boolean {
    let hashmap = {
        "(":")",
        "{":"}",
        "[":"]",
    }
    let stack = [];
    for(let character of s){
        if(hashmap[character]){
            stack.push(hashmap[character]);
        }
        else if (stack.length > 0 && stack[stack.length - 1] === character){
            stack.pop();
        } else{
            return false;
        }
    }
    return stack.length === 0;

};