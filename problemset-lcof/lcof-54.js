/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    // 反向中序遍历
    let count = 0;
    let res = 0;
    dfs(root);
    function dfs(root) {
        if(count === k) return;
        if(root === null) return;
        dfs(root.right);
        count++;
        if(count === k) res = root.val;
        dfs(root.left);
    }
    return res;
};