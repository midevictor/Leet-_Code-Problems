/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
// var shortestCommonSupersequence = function(str1, str2) {
//     let i = 0, j = 0;
//     let superStr = [];

//     while(i < str1.length && j < str2.length){
//         if(str1[i] === str2[j]) {
//             superStr.push(str1[i]);
//             i++;
//             j++;
//         } else if(str1[i] < str2[j]) { // Take the lexicographically smaller character
//             superStr.push(str1[i]);
//             i++;
//         } else {
//             superStr.push(str2[j]);
//             j++;
//         }
//     }
    
//     // Append remaining characters from str1 or str2
//     while(i < str1.length) {
//         superStr.push(str1[i++]);
//     }
//     while(j < str2.length) {
//         superStr.push(str2[j++]);
//     }

//     return superStr.join("");
// };
var shortestCommonSupersequence = function(str1, str2) {
    const m = str1.length;
    const n = str2.length;

    // Create a 2D DP array to store the length of LCS
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    // Fill the DP table for LCS calculation
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Reconstruct the shortest common supersequence
    let i = m, j = n;
    let result = [];

    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            result.push(str1[i - 1]);
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            result.push(str1[i - 1]);
            i--;
        } else {
            result.push(str2[j - 1]);
            j--;
        }
    }

    // Add remaining characters from str1 or str2
    while (i > 0) {
        result.push(str1[i - 1]);
        i--;
    }
    while (j > 0) {
        result.push(str2[j - 1]);
        j--;
    }

    // Reverse the result to get the correct order
    return result.reverse().join("");
};
