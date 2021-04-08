/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    let res = [];
    let c = [];
    for(let char of s) {
        c.push(char);
    }
    dfs(0);
    return res;

    function dfs(x) {
        if(x === c.length - 1) {
            res.push(c.join(""));
        }

        let set = new Set();
        for(let i = x; i < c.length; i++) {
            if(set.has(c[i])) continue;

            set.add(c[i]);
            let tmp = c[x];
            c[x] = c[i];
            c[i] = tmp;

            dfs(x + 1);

            tmp = c[x];
            c[x] = c[i];
            c[i] = tmp;
        }
    }
};

