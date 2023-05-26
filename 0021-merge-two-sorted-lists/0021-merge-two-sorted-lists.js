/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
   // create an intstance of a tempNode with head as zero and next as nill
    let tempNode = new ListNode(0, null);
    console.log(tempNode);
    let currentNode = tempNode;
    
    while(list1 && list2){
        if(list1.val < list2.val ){
            currentNode.next = list1;
            list1 = list1.next;
        }
        else{
            currentNode.next = list2;
            list2 = list2.next;
        }
        currentNode = currentNode.next;
    }
    currentNode.next = list1 || list2;
    
    return tempNode.next;
    
//     let tempNode = new ListNode(0, null);
// let currentNode = tempNode;

// while (l1 && l2) {
//     if (l1.val < l2.val) {
//         currentNode.next = l1;
//         l1 = l1.next;
//     } else {
//         currentNode.next = l2;
//         l2 = l2.next;
//     }
//     currentNode = currentNode.next;
// }

// currentNode.next = l1 || l2;

// return tempNode.next;
};