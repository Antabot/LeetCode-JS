/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    let temp = new Array(nums.length);
    for(let i = 0; i < nums.length; i++) {
        if(temp[nums[i]] == null) {
            temp[nums[i]] = 1;
        } else return nums[i];
    }
};