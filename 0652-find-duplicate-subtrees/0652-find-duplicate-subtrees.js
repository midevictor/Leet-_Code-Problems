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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let map = new Map();
    let result = [];
    
    let postOrder = function(curr){
        if(!curr){
            return ""
        }
        let leftSubTree = postOrder(curr.left);
        let rightSubTree = postOrder(curr.right);
        let structure = `${curr.val}_${leftSubTree}_${rightSubTree}`
        map.set(structure, (map.get(structure) || 0) + 1);
        if(map.get(structure) == 2){
            result.push(curr)
        }
        return structure;
    }
    postOrder(root);
    return result;   
};