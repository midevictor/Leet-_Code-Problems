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
var rightSideView = function(root) {
    if(!root){
        return []
    }
    const result = [];
    const queue = [root];
    while(queue.length){
        let length = queue.length
        let count = 0;
        let rightMostValue = null;
        while(count < length){
            const currentNode = queue.shift();
            if(count === length - 1){
                rightMostValue = currentNode.val
            }
            
            if(currentNode.left){
                queue.push(currentNode.left)
            }
            if(currentNode.right){
                queue.push(currentNode.right);
            }
            count++
        }
        result.push(rightMostValue);
    }
    
    return result;
};
