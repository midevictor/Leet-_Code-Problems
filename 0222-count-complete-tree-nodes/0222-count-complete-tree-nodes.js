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
 * @return {number}
 */
var countNodes = function(root) {
    //BFS
    if(!root){
        return 0;
    } 
    let queue = [root];
    let count = 0;
    while(queue.length > 0){
        let currentNode = queue.shift();
        if(currentNode){
            count++;
            queue.push(currentNode.left);
            queue.push(currentNode.right);
        }
    }
    return count
};