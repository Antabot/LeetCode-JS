/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(root === null) return true;

    let q1 = [];
    let q2 = [];

    q1.push(root);
    q2.push(root);

    function insert(queue, node) {
        if(node) {
            queue.push(node);
        } else {
            queue.push(new TreeNode(null));
        }
    }

    while(q1.length && q2.length) {
        let n1 = q1.shift();
        let n2 = q2.shift();

        // console.log(n1.val, n2.val);
        if(n1.val !== n2.val) return false;
        if(n1.val !== null) {
            insert(q1, n1.left);
            insert(q1, n1.right);
        }

        if(n2.val !== null) {
            insert(q2, n2.right);
            insert(q2, n2.left);
        }
    }

    return true;
};