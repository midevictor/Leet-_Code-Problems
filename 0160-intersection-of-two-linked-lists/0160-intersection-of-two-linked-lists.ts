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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let countA  = 0;
    let currentA = headA;
    let countB = 0;
    let currentB = headB;
    
    while(currentA){
        countA++;
        currentA = currentA.next;
    }
    while(currentB){
        countB++;
        currentB = currentB.next;
    }
    currentA = headA;
    currentB = headB;
    if(countA > countB){
        let diff = countA - countB;
        while(diff){
            currentA = currentA.next;
            diff--    
        }
    } else{
        
        let diff = countB - countA;
        while(diff){
            currentB = currentB.next;
            diff--    
        }
    }
    
        
  while( currentA && currentB && currentA !== currentB){
      currentA = currentA.next;
      currentB = currentB.next;
      
  }
    
    return currentA;

};