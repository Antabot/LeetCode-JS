/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    if(nums[0] !== 0) return 0;
    if(nums[nums.length - 1] != nums.length) return nums[nums.length - 1] + 1;
    let left = 0, right = nums.length - 1;
    let mid = parseInt((left + right) / 2);
    while(true) {
        if(nums[mid] === mid) {
            left = mid + 1;
            mid = parseInt((left + right) / 2);
        } else {
            right = mid;
            if(nums[mid - 1] === (mid - 1)) return mid;
            mid = parseInt((left + right) / 2);
        }
    }
    return 0;

};