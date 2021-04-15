/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    // 算出当前 n 所处的位置是几位数的范围，再根据 n 与该范围最大值的差值寻找 n 对应的数
    // 因为 n 是下标，也是从 0 开始，所以个位数范围的最大索引是 9
    let limit = 9;
    let count = 9;
    let times = 1;
    while(n > limit) {
        times++;
        count = 9 * times * (10 ** (times - 1));
        limit += count;
    }

    let diff = limit - n;
    let high = (10 ** times) - 1;
    let cur = high - Math.trunc(diff / times);
    let index = times - diff % times - 1;
    return Number(cur.toString()[index]);
};