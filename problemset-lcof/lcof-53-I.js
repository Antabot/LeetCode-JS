/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length;
    let mid = parseInt((left + right) / 2);
    let count = 0;
    while(nums[mid] !== target) {
        if(left === right) break;
        if(nums[mid] > target) {
            right = mid;
            mid = parseInt((left + right) / 2);
        } else {
            left = mid + 1;
            mid = parseInt((left + right) / 2);
        }
    }

    let i = mid, j = mid - 1;
    while(nums[i] === target) {
        i++;
        count++;
    }

    while(nums[j] === target) {
        j--;
        count++;
    }
    return count;
};