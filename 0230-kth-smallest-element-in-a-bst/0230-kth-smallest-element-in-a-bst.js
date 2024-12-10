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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
       if (!root) return null;

    // Array to hold node values
    const values = [];
    
    // BFS traversal
    const queue = [root];
    while (queue.length > 0) {
        const node = queue.shift(); // Dequeue the current node
        values.push(node.val);     // Push its value into the array

        // Add children to the queue
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    
    // Sort the values and return the k-th smallest
    values.sort((a, b) => a - b);
    return values[k - 1];
    
};