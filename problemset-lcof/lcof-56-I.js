/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    if(nums.length === 0) return []
    let ret = 0;
    for(let num of nums) {
        ret = num ^ ret;
    }
    let div = 1;
    while((div & ret) == 0) {
        div = div << 1;
    }
    let a = 0, b = 0;
    for(let num of nums) {
        if((div & num) !== 0)
            a = a ^ num;
        else b = b ^ num;
    }

    return [a,b];
};