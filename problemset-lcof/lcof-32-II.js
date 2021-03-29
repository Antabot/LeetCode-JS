/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root === null) return [];
    let queue = [];
    let res = [];
    res[0] = new Array();
    res[0][0] = root.val;
    let tmp = [];
    queue.push(root);

    while(queue.length) {
        for(let i = queue.length - 1; i >= 0; i--) {
            let node = queue.shift();
            if(node.left !== null) {
                tmp.push(node.left.val);
                queue.push(node.left);
            }
            if(node.right !== null) {
                tmp.push(node.right.val);
                queue.push(node.right);
            }
        }

        res.push(tmp);
        tmp = [];
    }

    res.pop();
    return res;
};