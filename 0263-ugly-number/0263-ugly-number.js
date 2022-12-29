/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    //1st condition
    if(n==0){
        return false;
    }
    //2nd condition 
    while(n!=1){
        if(n%2===0){
            n=n/2
            continue;
        }
         if(n%3===0){
            n=n/3
            continue;
        }
          if(n%5===0){
            n=n/5
            continue;
        }
        else{
            return false;
        }

    }
    return true
};