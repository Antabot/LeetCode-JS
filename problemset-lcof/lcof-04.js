/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    if(matrix.length == 0 || matrix[0].length ==0) return false;
    let p1 = 0;

    while(p1 < matrix.length) {
        let p2 = matrix[0].length - 1;
        while(p2 >= 0) {
            if(matrix[p1][p2] === target) {
                return true;
            }
            
            if(matrix[p1][p2] > target) {
                if(p2 == 0) return false;
                p2--;
                continue;
            }

            if(matrix[p1][p2] < target) {
                p1++;
                break;
            }
        }
    }

    return false;
};