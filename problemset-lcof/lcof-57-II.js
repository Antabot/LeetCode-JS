/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    let pre = 2;
    let last = 1;
    let res = [];
    let sum = 3;
    while(last < pre) {
        if(sum === target) {
            let seq = [];
            let j = 0;
            for(let i = last; i <= pre; i++) {
                seq[j] = i;
                j++;
            }
            res.push(seq);
            pre++;
            sum += pre;
        } else if(sum < target) {
            pre++;
            sum += pre;
        } else if(sum > target) {
            sum -= last;
            last++;
        }
    }
    return res;
};