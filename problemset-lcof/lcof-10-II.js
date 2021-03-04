/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    if(n === 0) return 1;
    if(n === 1) return 1;
    if(n === 2) return 2;
    let a = 1;
    let b = 2;
    
    let sum;
    for(let i = 3; i <= n; i++) {
        sum = (a + b) % 1000000007;
        a = b;
        b = sum;
    }
    return b;
};