/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if(nums.length === 0 || k === 0) return [];
    let index = 0;
    let max = -Infinity;
    let res = [];
    for(let i = 0; i < k; i++) {
        if(nums[i] > max) {
            max = nums[i];
            index = i;
        }
    }
    res.push(max);

    for(let i = k; i < nums.length; i++) {
        if(nums[i] >= max) {
            index = i;
            max = nums[i];
            res.push(max);
        } else if(index !== i - k) res.push(max);
        else {
            [max, index] = findMax(i - k + 1, i);
            res.push(max);
        }
    }

    return res;

    function findMax(start, end) {
        let max = - Infinity;
        let index = start;
        for(let i = start; i <= end; i++) {
            if(nums[i] > max) {
                max = nums[i];
                index = i;
            }
        }
        return [max, index];
    }
};