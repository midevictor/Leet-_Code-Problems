/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    const finish = (k)=> {
        let hours = 0;
        for(const pile of piles){
            hours = hours + Math.ceil(pile/k);
        }
        return hours <= h;
    }
    
    let left = 1;
    let right = Math.max(...piles);
    
    while(left < right){
        let mid = Math.floor((left + right)/ 2);
        if(finish(mid)){
            right = mid; 
        }
        else{
            left = mid + 1;
        }
    }
    
    return left;
    
};