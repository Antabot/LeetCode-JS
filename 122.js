/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var i = 0;
    var j = 0;
    var profit = 0;
    for(i; i < prices.length - 1; i++) {
        if(prices[i] < prices[i + 1]) profit += prices[i + 1] - prices[i];
    }

    return profit;
};