/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let num1 = '';
    let num2 = '';

    while (l1) {
        num1 = l1.val + num1
        l1 = l1.next
    }

    while (l2) {
        num2 = l2.val + num2
        l2 = l2.next
    }

    const sum = (BigInt(num1) + BigInt(num2)).toString()

    let list = null
    let i = 0
    while (i < sum.length) {
        list = new ListNode(sum[i], list)
        i++
    }

    return list

};