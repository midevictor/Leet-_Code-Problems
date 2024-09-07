
var StockSpanner = function() {
    this.stack = [];
    this.span = [];
 
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    
    let span = 1;
    
    while(this.stack.length && this.stack[this.stack.length - 1] <= price){
        this.stack.pop();
        // span = this.span + this.span.pop();
        span += this.span.pop()
    }
    
    this.stack.push(price);
    
    this.span.push(span);
    
   return this.span[this.span.length - 1];
       
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */