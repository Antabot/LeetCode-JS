/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let res = 0;
    let map = new Map();
    let pre = 0, last = 0;
    while(pre < s.length) {
        if(!map.has(s[pre])) {
            map.set(s[pre], pre);
        } else {
            res = Math.max(res, pre - last);
            last = Math.max(map.get(s[pre]) + 1, last);
            map.set(s[pre], pre);
        }
        pre++;
    }
    res = Math.max(pre - last, res);
    return res;
};