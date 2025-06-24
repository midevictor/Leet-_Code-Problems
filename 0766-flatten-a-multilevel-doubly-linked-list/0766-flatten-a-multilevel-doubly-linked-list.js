/**
 * // Definition for a _Node.
 * function _Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var flatten = function(head) {
    let curr = head;
    let stack = [];

    if(!head){ return head};

    while(curr){
        if(curr.child){
            if(curr.next){
            stack.push(curr.next);
            }
            curr.next = curr.child;
            curr.child.prev = curr;
            curr.child = null;
        }
        if(!curr.next && stack.length > 0){
            curr.next = stack.pop();
            curr.next.prev = curr;
        }
        curr = curr.next;
    }
    return head
    
};