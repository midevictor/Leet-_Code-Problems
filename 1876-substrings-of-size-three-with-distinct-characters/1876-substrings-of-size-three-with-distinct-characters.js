/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
//     let count = 0;
//     let result = 0;
//     let string = "";
    
//     for ( let i = 0; i < s.length; i++){
//         count++;
//         string = string + s[i];
//         if(count === 3){
//             if([...new Set(string.split(""))].length === 3){
//                 result++;
//                 count--;
//                 string = string.slice(1);
//             }
//         }
//     }
//     return result;
    let count = 0, result= 0, str = '';
    for(let i =0; i< s.length; i++) {
        count++;
        str = str+ s[i];
        if(count === 3) {
            if([...new Set(str.split(''))].length === 3) result++;
            count--;
            str = str.slice(1);
        }
    }
    return result;
    
};
    