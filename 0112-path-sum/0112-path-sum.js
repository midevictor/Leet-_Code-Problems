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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    return dfs(root, 0, targetSum)
    
};

const dfs = (root, sum, target)=> {
    if(!root){
        return false;
    }
    sum = sum + root.val;
    if(sum === target && !root.left && !root.right){
        return true;
    }
    return dfs(root.left,sum, target ) || dfs(root.right, sum , target);
    
}
//dfs