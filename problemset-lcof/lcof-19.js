/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let n = s.length;
    let m = p.length;
    let f = new Array(n + 1);
    for(let i = 0; i <= n; i++) {
        f[i] = new Array(m + 1);
    }

    for(let i = 0; i <= n; i++) {
        for(let j = 0; j <= m; j++) {
            f[i][j] = false;
        }
    }

    for(let i = 0; i <= n; i++) {
        for(let j = 0; j <= m; j++) {
            if(j === 0) {
                if(i === 0) f[i][j] = true;
                if(i !== 0) f[i][j] = false;
            } else {
                if(p.charAt(j - 1) != '*') {
                    if(i > 0 && (s.charAt(i - 1) == p.charAt(j - 1) || p.charAt(j - 1) === '.')) {
                        f[i][j] = f[i - 1][j - 1];
                    }
                } else {
                    // 当前 p 位为 *，如果 s[i] 与 p[j - 2] 已匹配，则 p 的后两位可忽略，此时 f[i][j] 即为 true;
                    if(j >= 2) {
                        // f[i][j] = f[i][j] || f[i][j - 2]
                        f[i][j] = f[i][j - 2];
                    }

                    // 若 s 前 i - 1 位与 j 匹配，s 新加的一位也与 * 前字符相同（.* 匹配任意字符），那么 f[i][j] 即匹配
                    if(i >= 1 && j >= 2 && (s.charAt(i - 1) === p.charAt(j - 2) || p.charAt(j - 2) === '.')) {
                        // 上一步中如果已算得 f[i][j] 为 true，则这一步无需计算;
                        f[i][j] = f[i][j] || f[i - 1][j];
                    }
                }
            }
        }
    }
    return f[n][m];
};