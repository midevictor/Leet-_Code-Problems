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

function getDecimalValue(head: ListNode | null): number {
    if(!head){
        return 0;
    }
    let  binary  = "";
    while(head){
        binary+= head.val;
        head = head.next;
    }
    
    return parseInt( binary, 2);

};