var verifyPostorder = function(postorder) {

    return recur(postorder, 0, postorder.length - 1);
};

function recur(array, i, j) {
    if(i >= j) return true;

    let p = i;
    while(array[p] < array[j]) p++;
    let right = p;
    while(array[p] > array[j]) p++;

    return (p === j) && recur(array, i, right - 1) && recur(array, right, j - 1);
}