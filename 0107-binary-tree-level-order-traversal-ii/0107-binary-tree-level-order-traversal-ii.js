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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let queue = [root];
    let results = [];
    
    if(!root){
        return results
    }
    
    while(queue.length){
        length = queue.length;
        let currentLevelNode = [];
        for(let i = 0; i < length; i++){
            currentNode = queue[i];
            currentLevelNode.push(currentNode.val);
            if(currentNode.left){
                queue.push(currentNode.left)
            }
            if(currentNode.right){
                queue.push(currentNode.right);
            }
        }
        queue = queue.slice(length);
        results.unshift(currentLevelNode);
    }
    
    return results;
    
};