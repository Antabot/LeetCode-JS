/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    let pre, head;
    if(root === null) return null;
    middleOrder(root);
    head.left = pre;
    pre.right = head;
    return head;

    function middleOrder(cur) {
        if(cur === null) return;
        middleOrder(cur.left);
        if(pre != null) {
            pre.right = cur;
        } else head = cur;
        cur.left = pre;
        pre = cur;
        middleOrder(cur.right);
    }
};

