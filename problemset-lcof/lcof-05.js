/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    let i = 0;
    while(i < s.length) {
        if(s[i] === ' ') {
            s = replaceStr(s, i, '%20');
        }
        i++;
    }
    return s;
};

function replaceStr(s, index, char) {
    let arr = s.split('');
    arr[index] = char;
    return arr.join('');
}