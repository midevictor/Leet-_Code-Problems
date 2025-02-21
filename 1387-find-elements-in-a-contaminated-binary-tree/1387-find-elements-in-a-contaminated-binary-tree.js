/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.left = (left===undefined ? null : left);
 *     this.right = (right===undefined ? null : right);
 * }
 */

/**
 * @param {TreeNode} root
 */
var FindElements = function(root) {
    this.values = new Set();
    if (root) this.recoverTree(root, 0);  // Start recovering from root with value 0
};

/**
 * Recovers the tree by setting correct values
 * @param {TreeNode} node
 * @param {number} val
 */
FindElements.prototype.recoverTree = function(node, val) {
    if (!node) return;
    node.val = val;
    this.values.add(val);
    
    this.recoverTree(node.left, 2 * val + 1);
    this.recoverTree(node.right, 2 * val + 2);
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    return this.values.has(target);
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root);
 * var param_1 = obj.find(target);
 */
