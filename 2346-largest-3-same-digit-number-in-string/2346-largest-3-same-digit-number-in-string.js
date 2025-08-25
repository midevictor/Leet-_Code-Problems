/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let maxDigit = "";
    for(let i = 0; i < num.length -2; i++){
        if(num[i] === num[i+1] && num[i] === num[i+2]){
            let currRepeat =  num[i].repeat(3)   
            if(currRepeat > maxDigit){
                maxDigit = currRepeat;
            }
        }

    }
     return maxDigit;
    
};