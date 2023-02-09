/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    return num.replace(/[02468]*$/, "");
};

// loop through backwards
// check if the current num is odd( parseint and num %22 !== 0)
// return slice( 0, i+1);
// else return ""