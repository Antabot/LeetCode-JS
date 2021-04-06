/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(root === null) return "[]";
    let s = "[";
    let queue = [];
    queue.push(root);

    while(queue.length) {
        let node = queue.shift();
        if(node !== null) {
            s = s + node.val + ",";
            queue.push(node.left);
            queue.push(node.right);
        } else s = s + "null,";
    }
    s = s.slice(0, s.length - 1);
    s = s + "]";
    return s;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data === "[]") return null;
    let vals = data.substring(1, data.length - 1).split(",");
    let root = new TreeNode(Number.parseInt(vals[0]));
    let queue = [];
    queue.push(root);
    let i = 1;
    while(queue.length) {
        let node = queue.shift();
        if(vals[i] !== "null") {
            node.left = new TreeNode(Number.parseInt(vals[i]));
            queue.push(node.left);
        }
        i++;
        if(vals[i] !== "null") {
            node.right = new TreeNode(Number.parseInt(vals[i]));
            queue.push(node.right);
        }
        i++;
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */