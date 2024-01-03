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
    //create a map to store subtres and their occurence
    let map = new Map();
    //an array to store the given results
    let result = [];
    
    //performs the postorder traversal
    let postOrder = function(curr){
        //if no current value, returns an empty string
        if(!curr){
            return ""
        }
        let leftSubTree = postOrder(curr.left);
        let rightSubTree = postOrder(curr.right);
        let structure = `${curr.val}_${leftSubTree}_${rightSubTree}`
        // console.log(structure);
        map.set(structure, (map.get(structure) || 0) + 1);
        if(map.get(structure) == 2){
            result.push(curr)
        }
        return structure;
    }
    postOrder(root);
    return result;   
};