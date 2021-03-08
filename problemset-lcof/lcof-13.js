/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
 
    let queue = [[0, 0]];
    let count = 0;

    let matrix = Array(m * n).fill(0);
    matrix[0] = 1;

    function insert(i, j) {
        if(i < 0 || i >= m || j < 0 || j >= n) return ;
        if(matrix[i * n + j] === 1) return ;
        let k1 = i === 100 ? 1 : (parseInt(i / 10) + i % 10);
        let k2 = j === 100 ? 1 : (parseInt(j / 10) + j % 10);
        if(k1 + k2 > k) return;

        matrix[i * n + j] = 1;
        queue.push([i, j]);
    }

    while(queue.length) {
        let p = queue.shift();
        count++;
        let i = p[0];
        let j = p[1];

        insert(i + 1, j);
        insert(i - 1, j);
        insert(i, j + 1);
        insert(i, j - 1);
    }

    return count;
};