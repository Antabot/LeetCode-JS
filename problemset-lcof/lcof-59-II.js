var MaxQueue = function() {
    this.queue = [];
    this.deque = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    return this.deque.length ? this.deque[0] : -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.queue.push(value);
    while(this.deque && value > this.deque[this.deque.length - 1]) {
        this.deque.pop();
    }
    this.deque.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    let first = this.queue.shift();
    if(first === this.deque[0]) this.deque.shift();
    return first ? first : -1;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */