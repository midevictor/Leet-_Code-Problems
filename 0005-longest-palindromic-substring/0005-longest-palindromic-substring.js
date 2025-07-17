/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result = "";
    for(let i = 0; i < s.length; i++){
        let left = i;
        let right = i;
        while(right + 1 < s.length && s[right + 1] === s[right]){
            right++;
        }
        while(left - 1 >= 0 && right + 1 < s.length && s[left-1] === s[right + 1]){
            left--;
            right++;
        }
        if(right-left + 1 > result.length){
            result = s.slice(left, right + 1);
        }
    }
    return result;
    
};