/**
 * @param {number} n
 * @return {number[]}
 */
var dicesProbability = function(n) {
    let dp = new Array(6).fill(1 / 6);
    for(let i = 2; i <= n; i++) {
        // tmp 用于存储多扔一个骰子后各点数和的概率
        let tmp = new Array(i * 5 + 1).fill(0);
        // 计算当前所有点数和与 1~6 相加的概率，相当于和出现一次，概率就加大基准数出现概率的六分之一
        for(let j = 0; j < dp.length; j++) {
            for(let k = 0; k < 6; k++) {
                tmp[j + k] = tmp[j + k] + dp[j] / 6.0;
            }
        }
        dp = tmp;
    }
    return dp;
};