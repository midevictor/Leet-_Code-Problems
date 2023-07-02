function beautySum(s: string): number {
    let result = 0;
    let map = new Map();
    for (let i = 0; i < s.length; i++){
        map.set(s[i], 1);
        for(let j = i+1; j < s.length; j++){
            if(map.has(s[j])){
                map.set(s[j], map.get(s[j] ) + 1)
            }
            else{
                map.set(s[j], 1)
            }
            if(map.size >= 2){
                result = result + frequency(map)
            }
        }
        map.clear()
    }
    return result;
    };
    
    const frequency = (map) => {
        let minimum = 500;
        let maximum = 1;
        
        for (let keys of map.values()){
            minimum = Math.min(minimum, keys);
            maximum = Math.max(maximum, keys);
        }
        
        
        return maximum - minimum;
    }



// Approach
// We use Map(Hah Map in other languages like c++,java) to store the frequency of occurance of each and every character of the string. For this we need to two loops, one to store thr 1st element and second to store the remaining elements of the string. For every addition of character into the map, we check the min value and max value of the map and substract it, if the substraction result is >=1, then we store it the final result variable which keeps on increasing for every iteration i.e., for every addition into the map(only when substraction is not zero)
// IMPORTANT CORNER CASE : we need to clear the map after every outer for loop(i.e, after comparing one element with every other element of the string) so that frequency for the next inner loop iteration wont be added to the map.

// Complexity
// Time complexity: O(n^2)
// Space complexity:O(26) //At max we can have 26 unique characters
// Code
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var beautySum = function(s) {
//     let result = 0;
//     let map = new Map();
//     for(let i = 0 ; i < s.length ; i++) {
//         map.set(s[i],1); 
//         for(let j = i+1 ; j < s.length ; j++) {
//         if(map.has(s[j])) {
//             map.set(s[j],map.get(s[j])+1)
//         }
//         else{
//             map.set(s[j],1)
//         }
//          if(map.size >=2) {
//             result = result + freq(map)
//         }
//         }
//         map.clear();
//     }
//     return result;
// };
//  const freq = (map)=> {
//         let min = 500;
//         let max = 1;
//         for(let keys of map.values()) {
//             min = Math.min(min , keys)
//             max = Math.max(max, keys)
//         }
//         return max-min;
//     }