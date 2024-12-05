
var RandomizedSet = function() {
    this.map = new Map(); // set a map
    this.list = []; // set an array
    
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map.has(val))return false; // return false once you get a val
    this.list.push(val);
    this.map.set(val, this.list.length-1);
    return true;    
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.map.has(val))return false;
    const index = this.map.get(val);
    const lastElement = this.list[this.list.length - 1];
    
    this.list[index] = lastElement;
    this.map.set(lastElement, index);
    
    this.list.pop();
    this.map.delete(val);
    return true;
      
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const random = Math.floor(Math.random() * this.list.length);
    return this.list[random];
    
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */