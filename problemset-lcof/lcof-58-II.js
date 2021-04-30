/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    let chars = s.split("");
    reverse(chars, 0, s.length - 1);
    reverse(chars, s.length - n, s.length - 1);
    reverse(chars, 0, s.length - n - 1);
    return chars.join("");

};

function reverse(arr, begin, end) {
    let i = begin, j = end;
    while(i < j) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
        i++;
        j--;
    }
}