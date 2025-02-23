/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.left = (left===undefined ? null : left);
 *     this.right = (right===undefined ? null : right);
 * }
 */

/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
    let postorderIndex = new Map();
    
    // Store indices of values in postorder for quick lookup
    for (let i = 0; i < postorder.length; i++) {
        postorderIndex.set(postorder[i], i);
    }

    let preIndex = 0; // Global pointer for preorder traversal

    function build(left, right) {
        if (left > right) return null;

        let root = new TreeNode(preorder[preIndex]);
        preIndex++;

        // Base case: if there's only one node in this range, return it
        if (left === right) return root;

        // Get the index of the left child in postorder
        let leftChildIndex = postorderIndex.get(preorder[preIndex]);

        // Recursively construct left and right subtrees
        root.left = build(left, leftChildIndex);
        root.right = build(leftChildIndex + 1, right - 1);

        return root;
    }

    return build(0, postorder.length - 1);
};
