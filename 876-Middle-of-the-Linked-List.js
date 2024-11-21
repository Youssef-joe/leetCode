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
var middleNode = function(head) {
    let counter = 0;
    let temp = head;

    while (temp) {
        counter++
        temp = temp.next
    }

    let mid = Math.floor(counter / 2);
    let curr = head

    for (let i = 0; i < mid; i++) {
        curr = curr.next
    }

    return curr
};