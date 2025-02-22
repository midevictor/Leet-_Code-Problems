/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.left = (left===undefined ? null : left);
 *     this.right = (right===undefined ? null : right);
 * }
 */

/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function(traversal) {
    let stack = [];
    let i = 0, n = traversal.length;

    while (i < n) {
        let depth = 0;

        // Count the number of dashes to determine depth
        while (i < n && traversal[i] === '-') {
            depth++;
            i++;
        }

        // Extract the node value
        let value = 0;
        while (i < n && !isNaN(traversal[i])) {
            value = value * 10 + (traversal[i].charCodeAt(0) - '0'.charCodeAt(0));
            i++;
        }

        let node = new TreeNode(value);

        // Maintain the correct depth in the stack
        while (stack.length > depth) {
            stack.pop();
        }

        // Attach node to its parent
        if (stack.length > 0) {
            if (!stack[stack.length - 1].left) {
                stack[stack.length - 1].left = node;  // Assign as left child
            } else {
                stack[stack.length - 1].right = node; // Assign as right child
            }
        }

        stack.push(node);
    }

    return stack[0]; // Root node is the first element in the stack
};
