/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // console.log(a,b)
    let aBinary = `0b${a}`;
    let bBinary = `0b${b}`;
    // console.log(aBinary,bBinary)
    const total = BigInt(aBinary) + BigInt(bBinary);
    // console.log(total);
    return total.toString(2);
};