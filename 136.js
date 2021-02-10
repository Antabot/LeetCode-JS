/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let temp = nums[0];
    for(let i = 1; i < nums.length; i++) {
        temp = temp ^ nums[i];
    }
    return temp;
};