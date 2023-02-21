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
var reverseList = function(head) {
    let prev = null;
    let current = head;
    
    while(current){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next  
    }
    return prev;  
};
//Explanation of while loop
// as long as current  != null
//    initialize next to the "next value after current"
//    setting the current(next) value to prev
//    previous value to its own currnet
//    then current to next