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
var deepestLeavesSum = function(root) {
    //BFS
    let q = [root];
    let answer;
    while(q.length){
        let length = q.length;
        answer = 0;
        for(let i = 0; i < length; i++){
            let curr = q.shift();
            answer = answer + curr.val;
            if(curr.left){
                q.push(curr.left);
            }
            if(curr.right){
                q.push(curr.right)
            }
        }
    }
    return answer;
    
};