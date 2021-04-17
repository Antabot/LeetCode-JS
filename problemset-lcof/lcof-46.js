/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
    let count = [];
    count[0] = 0;
    count[1] = 1;
    let str = num.toString();
    if(num === null) return 0;
    if(str.length === 1) return 1;

    if(str[0] === '1' || (str[0] === '2' && str[1] <= '5'))
        count[2] = 2;
    else count[2] = 1;

    let i = 3;
    while(i <= str.length) {
        if(str[i - 2] === '1' || (str[i - 2] === '2' && str[i - 1] <= '5'))
            count[i] = count[i - 2] + count[i - 1];
        else count[i] = count[i - 1];
        i++;
    }
    return count[count.length - 1];
};