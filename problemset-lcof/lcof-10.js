/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;

    let n1 = 0;
    let n2 = 1;
    let result;
    for(let i = 2; i <= n; i++) {
        result = (n1 + n2) % 1000000007;
        n1 = n2;
        n2 = result;
    }

    return result;
};