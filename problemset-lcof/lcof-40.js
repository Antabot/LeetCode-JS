/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    if(arr.length === 0 || k === 0) return [];
    let res = [];
    // 遍历前 k 个，并记录最大值
    // 后面的如果小于最大值，则替换掉最大值,然后获取新的最大值
    for(let i = 0; i < arr.length; i++) {
        if(i < k) {
            res.push(arr[i]);
            continue;
        }
        let max = getMax(res, 0, k - 1);
        if(arr[i] < max[0]) {
            res[max[1]] = arr[i];
        }
    }

    return res;
};

function getMax(arr, i, j) {
    let max = Number.MIN_VALUE;
    let index = 0;
    for(i; i <= j; i++ ) {
        if(arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }
    return [max, index];
}