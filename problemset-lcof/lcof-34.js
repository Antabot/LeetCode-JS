/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function(root, target) {
    // DFS
    if(root === null) return [];
    let res = [];
    let path = [];
    dfs(root, 0, []);
    return res;

    function dfs(root, sum) {
        if(root === null) return;
        path.push(root.val);
        sum += root.val;
        if(root.left === null && root.right === null) {
            // console.log(sum, path);
            if(sum === target) {
                let tmp = [];
                for(let p of path) {
                    tmp.push(p);
                }
                res.push(tmp); 
            }
        }
        dfs(root.left, sum);
        dfs(root.right, sum);
        path.pop();
    }
};

