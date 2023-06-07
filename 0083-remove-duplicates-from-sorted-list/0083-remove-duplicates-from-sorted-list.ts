/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
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
    
    // let next = head;
    // if(next === null){return head}
    // let newNext = head.next;
    // while(true){
    //     if(newNext === null){
    //         return head;
    //     }
    //     if(newNext.value === next.value){
    //         next.next = newNext.next ;
    //         newNext = next.next;
    //     }
    //     else{
    //         next = next.next;
    //         newNext = newNext.next;
    //     }
    // }
    // return head;
};