/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const min = -1  * Math.pow(2,31);
    const max = Math.pow(2,31) -1;

    let reverseInt = Math.sign(x) * parseInt(x.toString().split("").reverse().join(""));

    if(reverseInt > min && reverseInt < max){
        return reverseInt;
    }
    return 0;
};