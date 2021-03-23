/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    if(root === null) return null;
    switchNode(root);
    return root;
};

function switchNode(node) {
    if(node === null) return;
    let tmp = node.left;
    node.left = node.right;
    node.right = tmp;
    switchNode(node.left);
    switchNode(node.right);
}