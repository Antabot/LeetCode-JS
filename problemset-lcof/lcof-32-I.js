/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    if(root === null) return [];
    let queue = [];
    let res = [];
    queue.push(root);

    function insert(node) {
        if(node === null) return;
        queue.push(node);
    }

    while(queue.length) {
        let node = queue.shift();
        res.push(node.val);

        insert(node.left);
        insert(node.right);
    }

    return res;
};