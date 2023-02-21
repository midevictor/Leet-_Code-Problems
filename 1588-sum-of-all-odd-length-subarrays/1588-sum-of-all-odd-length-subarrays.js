/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    //BRUTE FORCE APPROACH
    let sum = 0;
    for( let i = 0; i < arr.length; i++){
        let newArray = [];
        for(let j = i; j < arr.length; j++){
            newArray.push(arr[j]);
            if(newArray.length % 2 != 0){
                for (k = 0; k < newArray.length; k++){
                    sum += newArray[k]
                }
            }
        }
    }
    return sum;
};