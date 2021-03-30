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
    let tmp = [];
    let res = [];
    queue.push(root);

    while(queue.length) {
        for(let i = queue.length - 1; i >= 0; i--) {
            let node = queue.shift();
            if(res.length % 2 === 0) {
                tmp.push(node.val);
            } else {
                tmp.unshift(node.val);
            }
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right); 
        }
        res.push(tmp);
        tmp = [];
    }

    return res;
};