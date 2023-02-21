/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let length = 0;
    let node = head;
    while(node != null){
        length++;
        node = node.next;
    }
    // console.log(length);
    node = head;
    let middle = Math.floor(length/2);
    // let node = head;
    let prev = null
    
    for(let i = 0; i < middle; i++){
        let temp = node.next;
        node.next = prev;
        prev = node;
        node = temp;
    }
    if(length %2 !== 0){
        node =  node.next
    }
    
    while(node != null && prev != null){
        if (node.val != prev.val){
            return false;
        }
        else{
            node = node.next;
            prev = prev.next;
        }
    }
    return true;
};

// 1)get the length of the linked list
// 2)get the middle of the list
// 3)reverse the list from the head to the middle of the length
// 4)check if values of either side are equal  