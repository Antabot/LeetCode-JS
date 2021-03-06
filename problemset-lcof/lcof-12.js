/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let result = false;
    function search(i, j, map, position) {
        if(i < 0 || i >= board.length || j < 0 || j >= board[0].length || map[i][j] != word.charAt(position)) return false;
        if(position === word.length - 1) return true;
        console.log(i, j, position);
        map[i][j] = -1;
        let res =  search(i, j + 1, map, position + 1) || search(i - 1, j, map, position + 1) || 
        search(i + 1, j, map, position + 1) || search(i, j - 1, map, position + 1);
        map[i][j] = word.charAt(position);
        return res;
    }

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] == word.charAt(0)) {
                if(search(i, j, board, 0)) return true;
            }
        }
    }

    return false;
};