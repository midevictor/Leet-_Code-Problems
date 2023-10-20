/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var replaceValueInTree = function(root) {
    //BFS
    let stack = [root]
    while(stack.length){
        let levelSum = 0;
        const currStack = [];
        for(let s of stack){
            if(s){
                levelSum = levelSum + s.val;
                if(s.left || s.right){
                    currStack.push(s.left, s.right)
                }
            }
        }  
    for (let i = 0; i < stack.length; i += 2){
        const pairSum = (stack[i]?.val || 0) + (stack[i + 1]?.val || 0)
        if(stack[i]){
            stack[i].val = levelSum - pairSum;
        }
         if(stack[i + 1]){
            stack[i + 1].val = levelSum - pairSum;
        }
    }
    stack = currStack
    }

    return root  
};