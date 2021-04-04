/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map();
    for(let a of nums) {
        if(!map.has(a)) {
            map.set(a, 1);
        } else map.set(a, map.get(a) + 1)

        if(map.get(a) >= nums.length / 2) return a;
    }

    return ;
};