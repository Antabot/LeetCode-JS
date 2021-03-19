/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let res = new ListNode(0);
    let tmp = res;
    while(l1 && l2) {
        if(l1.val <= l2.val) {
            tmp.next = l1;
            tmp = tmp.next;
            l1 = l1.next;
        } else {
            tmp.next = l2;
            tmp = tmp.next;
            l2 = l2.next;
        }
    }

    if(!l1) tmp.next = l2;
    if(!l2) tmp.next = l1;
    
    return res.next;
};