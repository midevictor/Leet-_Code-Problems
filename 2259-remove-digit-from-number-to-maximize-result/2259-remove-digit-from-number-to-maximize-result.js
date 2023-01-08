/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    let num = 0;
    let max = 0;
    for(let i = 0; i < number.length; i++){
        if(number[i] == digit){
            num = number.slice(0,i) + number.slice(i+1);
            if(num>max){
                max = num
            }
        }
    }
    return max
};