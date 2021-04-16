/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    for(let j = 0; j < nums.length; j++) {
        for(let i = 0; i < nums.length - j - 1; i++) {
                let a = Number((nums[i].toString() + nums[i + 1].toString()));
                let b = Number((nums[i + 1].toString() + nums[i].toString()));
                if(a > b) {
                    let tmp = nums[i];
                    nums[i] = nums[i + 1];
                    nums[i + 1] = tmp;
                }
        }
    }
    return nums.join('');
};