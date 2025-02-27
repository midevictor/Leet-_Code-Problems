/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
    if(arr.length < 3){
        return 0;
    }
    let obj = new Map();
    let maxV = 0;
    let n = arr.length;

    for(let i = 0; i < n; i++){
        obj.set(arr[i], i)
    }

    let dp = new Map();
    for(let j = 1; j < n; j++){
        for(let i = 0 ; i < j; i++){
            let prev = arr[i] + arr[j];
            if(obj.has(prev) && obj.get(prev) > j){
                let k = obj.get(prev);
                let len = (dp.get(`${i} , ${j}`) || 2) + 1;
                dp.set(`${j} , ${k}`, len)
                maxV = Math.max(maxV, len);
            }
        }
    }

    return maxV >= 3 ? maxV : 0;

    
};