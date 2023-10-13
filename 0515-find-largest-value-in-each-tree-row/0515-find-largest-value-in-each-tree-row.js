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
 * @return {number[]}
 */
var largestValues = function(root) {
    if(!root){
        return []
    }
    //an array holding the maximum numbers
    let result = []
    let queue = [root];
    
    //BFS
    while(queue.length){
        let tempQueue = [];
        let max = -Infinity;
        for(let i = 0; i < queue.length; i++){
            let node = queue[i];
            if(node.val > max){
                max = node.val;
            }
            if(node.left){
                tempQueue.push(node.left);
            }
            if(node.right){
                tempQueue.push(node.right);
            }
        }
        queue = tempQueue;
        result.push(max);
        max = -Infinity;
    }
    return result;
    
};

