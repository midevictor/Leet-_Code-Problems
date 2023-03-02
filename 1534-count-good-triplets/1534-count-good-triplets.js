/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        let num1 = arr[i];
        for(let j = i + 1; j < arr.length; j++){
            let num2 = arr[j]
            for (let k = j + 1; k < arr.length; k++){
                let num3 = arr[k];
                if((Math.abs(num1 - num2) <= a) && (Math.abs(num2 - num3) <= b) && (Math.abs(num1 - num3) <= c)){
                    count++
                }
            }
        }
    }
    return count
    
};


//  let count = 0;

//     for(let i = 0; i < arr.length; i++) {
//         let num1 = arr[i];
//         for(let j = i + 1; j < arr.length; j++) {
//             let num2 = arr[j];
//             for(let k = j + 1; k < arr.length; k++) {
//                 let num3 = arr[k];
//                 if((Math.abs(num1 - num2) <= a) &&
//                     (Math.abs(num2 - num3) <= b) &&
//                     (Math.abs(num1 - num3) <= c)
//                 ) count++;
//             }
//         }
//     }

//     return count;