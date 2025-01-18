/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
    let freq = new Array(121).fill(0);

    for(let age of ages){
        freq[age]++;
    }

    let request = 0;

    for(let x=15; x <= 120; x++ ){
        if(freq[x] === 0){
            continue;
        }
        for(let y = 15; y <= 120; y++){
            if(freq[y] === 0){
                continue;
            }
            if((y > 0.5 * x + 7) && y <= x){
                if(x === y){
                    request = request + (freq[x] * (freq[y] - 1));
                }else{
                    request = request + (freq[x] * freq[y]);
                }
            }
        }

    }
    return request;
    
};