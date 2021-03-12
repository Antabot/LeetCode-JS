/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    let length = 10 ** n - 1;
    let res = Array(length);
    for(let i = 1; i <= length; i++) {
        res[i - 1] = i;
    }

    return res;
};