/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    if(n === 2) return 1;
    if(n === 3) return 2;

    let time = parseInt(n / 3);
    let remain = n % 3;
    if(remain === 1) {
        return 3 ** (time - 1) * 4;
    }

    if(remain === 2) {
        return 3 ** time * 2;
    }

    if(remain === 0) {
        return 3 ** time;
    }
};