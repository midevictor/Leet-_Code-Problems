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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // if(!root){
    //     return [];
    // }
    // const result = [];
    // const queue = [root];
    // while(queue.length){
    //     let length = queue.length;
    //     let count = 0;
    //     const currentLevelNodes = [];
    //     while(count < length){
    //         const currentNode = queue.shift();
    //         currentLevelNodes.push(currentNode.val);
    //         if(currentNode.left){queue.push(currentNode.left);}
    //         if(currentNode.right){queue.push(currentNode.right);}
    //         count++;
    //     }
    //     result.push(currentLevelNodes);
    // }
    // return result;
    //if no root , return an empty array
//     if(!root){
//         return [];
//     }
//     //hold the array of each evel
//     const result = []
//     //hoold the root of the tree
//     let queue = [root]
    
//     while(queue.length){
//         let count = 0;
//         let length = queue.length;
//         const currentLevelNodes = [];
//         while(count < length){
//             const currNode = queue.shift();
//             currentLevelNodes.push(currNode.val)
//             if(currNode.left){queue.push(currNode.left)}
//             if(currNode.right){queue.push(currNode.right)}
//             count++
//         }
        
//         result.push(currentLevelNodes)
//     }
    
//     return result;
    
    if(!root){
        return []
    }
    let result = [];
    let queue = [root];
    
    while(queue.length){
        let length = queue.length;
        let currentLevelNode = []
        for(let i = 0; i < length; i++){
            const currentNode = queue[i]   
            currentLevelNode.push(currentNode.val);
            if(currentNode.left){
                queue.push(currentNode.left)
            }
            if(currentNode.right){
                queue.push(currentNode.right);
            }
        }
        queue = queue.slice(length);
        result.push(currentLevelNode)
    }
    return result;
};