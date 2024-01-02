/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let minimum = -1 * Math.pow(2, 31);
    let maximum = Math.pow(2,31) - 1;
    
    let reverseInt = Math.sign(x) * parseInt(x.toString().split("").reverse().join(""));
    
    if(reverseInt < maximum && reverseInt > minimum){
        return reverseInt
    }
    else{
        return 0;
    }
    
};