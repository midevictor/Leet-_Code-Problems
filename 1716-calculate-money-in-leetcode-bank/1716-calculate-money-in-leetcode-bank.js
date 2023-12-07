/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let answer = 0;
    let monday = 1;
    
    while(n > 0){
        for( let i = 0; i < Math.min(n, 7); i++){
        answer += monday + i;
    }
        n = n - 7
        monday++;      
    }
    return answer;
        
};