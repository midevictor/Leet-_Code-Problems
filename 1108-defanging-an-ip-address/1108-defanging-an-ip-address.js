/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    
    // let res = address.replace(/\./g, '[.]')
    // return res;
 
    let result = address.split('')
    for(let i=0;i<result.length;i++){
        if(result[i] == '.'){
         result[i] = '[.]'   
        }
    } 
    return result.join("")
};