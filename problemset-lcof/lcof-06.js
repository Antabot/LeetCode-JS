/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    let arr = new Array();
    if(!head) return [];
    
    arr = reversePrint(head.next);
    arr.push(head.val);
    return arr;
};