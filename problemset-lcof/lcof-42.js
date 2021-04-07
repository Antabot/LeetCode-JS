/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // dp[i] 表示前 i 个最大子数组和
    let length = nums.length;
    let cur = nums[0];
    let max = cur;
    for(let i = 1; i < length; i++) {
        if(cur > 0) {
            cur = nums[i] + cur;
        } else cur = nums[i];

        if(max < cur) max = cur;
    } 

    return max;
};