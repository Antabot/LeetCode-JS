/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
     function ListNode(val) {
        this.val = val;
        this.next = null;
        this.pre = null;
     }
     this.root = new ListNode(null);
     this.median = this.root;
     this.count = 0;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    // 如何放入合适位置？数组需要在添加时遍历找位置、移位，链表需要在添加时遍历找位置，查找中位数时移位，复杂度均为 O(2n)
    // 双向链表结合一个记录当前中位数位置的指针，可实现 O(n) 的算法

    let node = new ListNode(num);
    let cur = this.root;
    let pre = this.root;
    let afterMedian = false;

    if(this.root.next === null) {
        node.pre = this.root;
        this.root.next = node;
        this.median = node;
        this.count = 1;
        return;
    }

    while(cur !== null) {
        if(cur.val == null) {
            // pre = cur;
            cur = cur.next;
            continue;
        }

        if(num > cur.val) {
            if(cur === this.median) afterMedian = true;
            pre = cur;
            cur = cur.next;
        } else {
            pre.next = node;
            node.next = cur;
            node.pre = pre;
            cur.pre = node;
            break;
        }

        if(cur === null) {
            pre.next = node;
            node.pre = pre;
            break;
        }
    }
    this.count++;
    // }
    if(this.count === 1) this.median = this.root.next;
    else if(afterMedian) {
        if(this.count % 2 === 1) this.median = this.median.next; 
    } else {
        if(this.count % 2 === 0) this.median = this.median.pre;
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.count === 0) return null;
    let res;
    if(this.count % 2 === 0) {
        res = (this.median.val + this.median.next.val) / 2;
    } else {
        res = this.median.val;
    }
    return res;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */