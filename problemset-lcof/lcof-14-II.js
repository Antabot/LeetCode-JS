/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    if(n < 4) return n - 1;

    let a = parseInt(n / 3);
    let b = n % 3;

    let result = 1;

    if(b === 0) {
        for(let i = 1; i <= a; i++) {
            result = result * 3 % 1000000007;
        }
    } else if(b === 1) {
        for(let i = 1; i <= a - 1; i++) {
            result = result * 3 % 1000000007;
        }
        result = result * 2 % 1000000007;
        result = result * 2 % 1000000007;
    } else {
        for(let i = 1; i <= a; i++) {
            result = result * 3 % 1000000007;
        }
        result = result * 2 % 1000000007;
    }

    return result;
};