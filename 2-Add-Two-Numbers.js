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
     let dummyHead = new ListNode(0); // Dummy node to start the result list
    let current = dummyHead;
    let carry = 0;

    // Traverse both lists
    while (l1 || l2 || carry) {
        let sum = carry; // Start with the carry from the previous step

        if (l1) {
            sum += l1.val; // Add l1's value
            l1 = l1.next;  // Move to the next node in l1
        }

        if (l2) {
            sum += l2.val; // Add l2's value
            l2 = l2.next;  // Move to the next node in l2
        }

        carry = Math.floor(sum / 10); // Calculate the new carry
        current.next = new ListNode(sum % 10); // Create a new node for the current digit
        current = current.next; // Move to the next node in the result list
    }

    return dummyHead.next; // Return the result list (skip the dummy node)
};