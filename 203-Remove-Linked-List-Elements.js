/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummy = new ListNode(0);  // Create a dummy node
    dummy.next = head;  // Set the dummy node's next to head
    let current = dummy;  // Use 'current' to traverse the list

    while (current.next) {  // Traverse the list
        if (current.next.val === val) {
            current.next = current.next.next;  // Skip the node with value 'val'
        } else {
            current = current.next;  // Move to the next node if no removal
        }
    }
    
    return dummy.next;
};