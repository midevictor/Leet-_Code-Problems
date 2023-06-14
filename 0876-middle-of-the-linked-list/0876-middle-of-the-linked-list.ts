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

function middleNode(head: ListNode | null): ListNode | null {
    let currentNode = head;
    let i = 1;
    while( currentNode.next !== null){
        currentNode = currentNode.next;
        i++;
    }
    if(i === 1){
        return currentNode;
    }
    if(i === 2){
        return head.next;
    }
    const getMiddle = (num) => {
        if(num % 2 !== 0){
            return Math.round((num/2));
        }
        else{
            return ((num/2) + 1);
        }
    }
    let middleInt = getMiddle(i);
    currentNode = head;
    i = 1;
    
    while(currentNode.next !== null ){
        if(i === middleInt){
            return currentNode;
        }
        currentNode = currentNode.next;
        i++;
    }
    return null;

};