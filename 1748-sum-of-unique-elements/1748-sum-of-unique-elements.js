/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const newObj = {};
    for(const value of nums){
        if(newObj[value] ? (newObj[value] = newObj[value] + 1) : (newObj[value] = 1)){}
    }
    let sumUniqueElements = 0;
        for (const index in newObj){
            if(newObj[index] < 2){
                sumUniqueElements += parseInt(index);     
            }
        }
        return sumUniqueElements;   
};
