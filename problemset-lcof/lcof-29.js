/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix[0] == null) return matrix;

    let m = matrix.length;
    let n = matrix[0].length;
    let status = new Array(m * n).fill(0);
    let res = new Array(m * n).fill(0);

    let direction = 'right';
    let i = 0, j = 0, count = 0;

    while(true) {
        res[count] = matrix[i][j];
        status[i * n + j] = 1;
        if(count === m * n - 1) break;
        // console.log(res);
        // 走投无路，退出
 

        // if(direction === 'right') {
            if((j < n - 1) && status[i * n + j + 1] === 0) {
                j++;
                count++;
            } else direction = 'down';
            if((i >= m - 1) && status[(i + 1) * n + j]) break;
            // continue;
        // }

        // if(direction === 'down') {
            if((i < m - 1) && status[(i + 1) * n + j] === 0) {
                i++;
                count++;
            } else direction = 'left';
            if(j <= 0 && status[i * n + j - 1]) break;
            // continue;
        // }

        // if(direction === 'left') {
            if(j > 0 && status[i * n + j - 1] === 0) {
                j--;
                count++;
            } else direction = 'up';
            if(status[(i - 1) * n + j]) break;
            // continue;
        // }

        if(direction === 'up') {
            if(status[(i - 1) * n + j] === 0) {
                i--;
                count++;
            } else direction = 'right';
            if(status[i * n + j + 1]) break;
            // continue;
        }
    }

    return res;
};