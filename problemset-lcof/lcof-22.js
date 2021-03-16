/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let former = head;
    let latter = head;

    for(let i = 0; i < k; i++) {
        former = former.next;
    }

    while(former) {
        former = former.next;
        latter = latter.next;
        if(!former) break;
    }

    return latter;
};