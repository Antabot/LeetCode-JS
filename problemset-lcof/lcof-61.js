/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    let numSet = new Set();
    for(let n of nums) {
        if(n === 0) continue;
        if(numSet.has(n)) return false;
        else numSet.add(n);
    }

    let max = -1, min = 14;
    for(let n of numSet.keys()) {
        max = Math.max(max, n);
        min = Math.min(min, n);
    }

    if(max - min > 4) return false;

    return true;
};