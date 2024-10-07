/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if (!root) return null; // Handle the case where the tree is empty

    let queue = [root];

    while (queue.length > 0) {
        let length = queue.length;

        for (let i = 0; i < length; i++) {
            let currNode = queue.shift();

            // Set the 'next' pointer for the current node
            if (i < length - 1) {
                currNode.next = queue[0]; // Connect to the next node in the queue
            } else {
                currNode.next = null; // Last node of the level, point to null
            }

            // Add left and right children to the queue if they exist
            if (currNode.left) {
                queue.push(currNode.left);
            }
            if (currNode.right) {
                queue.push(currNode.right);
            }
        }
    }

    return root; // Return the modified tree
};
