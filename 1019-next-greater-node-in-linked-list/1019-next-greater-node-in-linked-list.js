/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */


var nextLargerNodes = function(head) {
    let curr = head
    let arr = []
   // push the list into the arr
    while(curr){
        arr.push(curr.val)
        curr = curr.next
    }
    let stack =  [];
    let newArr = new Array(arr.length)
    for(let i = arr.length-1; i>=0; i--){
        while(stack.length!=0 && stack[stack.length-1]<=arr[i]){
            stack.pop()
        }
        if(stack.length === 0){
            newArr[i] = 0
            
        } else {
            newArr[i] = stack[stack.length-1]
        }
        stack.push(arr[i])
    }
    return newArr
    
};
