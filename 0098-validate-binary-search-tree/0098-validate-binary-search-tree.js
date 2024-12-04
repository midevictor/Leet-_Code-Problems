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
 * @return {boolean}
 */
var isValidBST = function(root) {
    if(!root){
        return true;
    }
    return dfs(root, -Infinity, Infinity);  
};

const dfs= (node, minimum, maximum) => {
    if(node.val <= minimum || node.val >= maximum){
        return false;
    }
    if(node.left){
        //node.left = val
        //minimum = minimum
        //maximum = node.val
        if(!dfs(node.left, minimum, node.val)){
            return false;
        }
    }  
    if(node.right){
        //node.right = val
        //node.val = minimum
        //maximum = maximum
        if(!dfs(node.right, node.val, maximum)){
            return false;
        }
    }
    return true;
}