/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
   let set = new Set();
    //While the sum is not equal to 1
    while (n !== 1){
        sum = 0;
        while(n > 0){
            //Using the use case given as an example 19
            //sum = 0 + ((19%10) * (19%10))
            // sum = 0 +(9 * 9)
            // sum = 81
            sum = sum + ((n % 10) * (n % 10));
            // n = 19/10 = 1
            n = Math.floor(n/10);
        }
        if(set.has(sum)){
            return false;
        }
        else{
            set.add(sum);
            n=sum;
        }
    }
    return true;
};