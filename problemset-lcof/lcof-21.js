/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let j = nums.length - 1;
    let i = 0;
    while(i < j) {
        if(nums[i] % 2 !== 0) {
            i++;
            continue;
        }
        if(nums[j] % 2 !== 0) {
            let tmp = nums[j];
            nums[j] = nums[i];
            nums[i] = tmp;
            i++;
        }
        j--;
    }

    return nums;
};