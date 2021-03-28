/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stack = [];
    
    let i = 0, j = 0;

    while(j < pushed.length) {
        stack.push(pushed[j]);
        while(stack.length && stack[stack.length - 1] === popped[i]) {
            stack.pop()
            i++;
        }
        j++;
    }

    return !stack.length;
};