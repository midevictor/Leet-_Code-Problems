/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    let productMap = new Map();
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            let product = nums[i] * nums[j];
            if(!productMap.has(product)){
                productMap.set(product, 0)
            }

            count = count + productMap.get(product);
            productMap.set(product, productMap.get(product) + 1)

        }
    }
    return count * 8
};