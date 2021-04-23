/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    let count = 0;
    merge(nums, 0, nums.length - 1);
    return count;

    function merge(nums, left, right) {
        let mid = parseInt((left + right) / 2);
        if(left < right) {
            merge(nums, left, mid);
            merge(nums, mid + 1, right);
            mergeSort(nums, left, mid, right);
        }
    }

    function mergeSort(nums, left, mid, right) {
        let tmp = [];
        let i = left;
        let j = mid + 1;
        while(i <= mid && j <= right) {
            if(nums[i] > nums[j]) {
                count = count + mid - i + 1;
                tmp.push(nums[j]);
                j++;
            } else {
                tmp.push(nums[i]);
                i++;
            }
        }


        while(j <= right) {
            tmp.push(nums[j]);
            j++;
        }

        while(i <= mid) {
            tmp.push(nums[i]);
            i++;
        }

        for(let k = 0; k < tmp.length; k++) {
            nums[k + left] = tmp[k];
        }

    }
};