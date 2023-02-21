/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let currentNode = head;
    let prevNode = head;
  
    
    while(currentNode !== null){
        if(currentNode.val === val){
            const next = currentNode.next;
            prevNode.next = next;
            currentNode = next;
        }
        else{
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
    }
      if(head?.val === val){
        return head.next;
    }
    return head;
    
    
};