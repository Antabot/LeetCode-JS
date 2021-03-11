/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(x !== 1 && x !== -1 && n <= -2147483648) return 0;
    let b = n;
    let res = 1;
    if(n < 0) {
        x = 1 / x;
        b = -b;
    }

    while(b > 0) {
        if(b & 1) {
            res = res * x;
        }
        x = x * x;
        b = b >> 1;
    }

    return res;
};