/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    if(s === null || s.length === 0) return false;
    let isNum = false, isDot = false, ise_or_E = false;

    let i = 0;
    while(s[i] === ' ') {
        i++;
    }
    let start = i;
    for(i; i < s.length; i++) {

        if(s[i] >= '0' && s[i] <= '9') isNum = true;
        
        else if(s[i] === '.') {
            if(isDot || ise_or_E) return false;
            isDot = true;
        }

        else if(s[i] === 'e' || s[i] === 'E') {
            if(!isNum || ise_or_E) return false;
            ise_or_E = true;
            isNum = false;
        }

        else if(s[i] === '+' || s[i] === '-') {
            if(i !== start && s[i - 1] !== 'e' && s[i - 1] !== 'E') return false;
        }

        else if(s[i] === ' ') {
            if(i !== s.length - 1 && s[i + 1] !== ' ') return false;
        }

        else return false;
    }

    return isNum;
};