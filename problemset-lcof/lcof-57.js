/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(nums === null || nums.length < 2) return [];
    let i = 0, j = nums.length - 1;
    while(nums[i] + nums[j] !== target) {
        if(i >= j) return [];
        if(nums[i] + nums[j] > target) j--;
        else i++;
    }

    return [nums[i], nums[j]];
};