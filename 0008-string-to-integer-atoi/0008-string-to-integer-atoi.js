/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const int_max = Math.pow(2, 31) - 1;
    const int_min = -1 * Math.pow(2, 31);
    
    let trimmed = "";
    for(let i = 0; i < s.length; i++){
        if(s[i] !== " "){
            trimmed = s.slice(i);
            break;
        }
    }
    if(trimmed.length === 0)return 0;
    let sign = 1;
    if(trimmed[0] === "-" || trimmed[0] === "+"){
        sign = trimmed[0] === "-" ? -1 : 1;
        trimmed = trimmed.slice(1);
    }
    
    let num = "";
    for(let i = 0; i < trimmed.length; i++){
        if(trimmed[i] >= '0' && trimmed[i] <= '9'){
            num += trimmed[i]
        }
        else{
            break;
        }
    }
    if(num.length === 0)return 0;
    
    num = parseInt(num) * sign;
    if(num< int_min)return int_min;
    if(num>int_max)return int_max;
    
    return num;
    
};