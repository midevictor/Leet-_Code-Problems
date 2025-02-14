
var ProductOfNumbers = function() {
    this.prefixProduct = [1];
    
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    if(num === 0){
        this.prefixProduct = [1];
    }else{
        let lastProduct = this.prefixProduct[this.prefixProduct.length - 1];
        this.prefixProduct.push(num * lastProduct)
    }
    
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    let n = this.prefixProduct.length;
    if(k>=n)return 0;
    return this.prefixProduct[n - 1]/ this.prefixProduct[n - k - 1]
    
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */