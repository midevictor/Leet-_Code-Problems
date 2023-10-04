/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    //empty array to store either push or pull
    let array = [];
    let k = 0;
    //iterate the stream of numbers
    for(let i = 1; i <= n; i++){
        //first iteration , you have to push either ways
        array.push("Push");
        if(target[k] === i){
            k++
        }
        else{
            array.push("Pop")
        }
        if(k >= target.length){
            break;
        }
    }
    return array;
    
};