/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
   // let current = head;
   //  while(current){
   //      if(current.next !== null && current.value === current.next.value){
   //          current.next = current.next.next;
   //      }
   //      else{
   //          current = current.next;
   //      }
   //  }
   //  return head;
    let i = head
    while(i && i.next)
        i.val == i.next.val ? i.next = i.next.next : i = i.next
    return head
};