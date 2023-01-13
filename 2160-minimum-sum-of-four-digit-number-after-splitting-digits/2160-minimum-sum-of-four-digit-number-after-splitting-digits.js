/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    //num contains exactly four digits(i = 0,1,2,3)
  let  strTonum = num.toString().split("").sort();
    console.log(strTonum)
    let num1 = strTonum[0] + strTonum[2];
    let num2 = strTonum[1] + strTonum[3];
    return +num1 + +num2;
    
    
};