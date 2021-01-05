/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var j = 0;
    for(i = 1; i < nums.length; i ++) {
        if(nums[j] != nums[i]) nums[++j] = nums[i];
    }
    return j+1;
};