/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(head === null) return null;
    // 放入 map，添加 index(node 是键，index 是值)
    let map = new Map();
    let node = head;
    let i = 0;
    while(node) {
        map.set(node, i);
        i++;
        node = node.next;
    }

    // 使用数组存放值和 random 索引
    let a = [];
    node = head;
    while(node) {
        a.push([node.val, node.random ? map.get(node.random) : null]);
        node = node.next;
    }

    // 根据数组重建链表，random 统一为 null
    let coppied = new Node(a[0][0], null, null);
    // key: index value: node，用于设置 random
    let cMap = new Map();
    cMap.set(0, coppied);
    let cnode = coppied;
    for(let i = 1; i < a.length; i++) {
        cnode.next = new Node(a[i][0], null, null);
        cMap.set(i, cnode.next);
        cnode = cnode.next;
    }

    // 设置 random
    cnode = coppied;
    for(let i = 0; i < a.length; i++) {
        cnode.random = a[i][1] === null ? null : cMap.get(a[i][1]);
        cnode = cnode.next;
    }

    return coppied;

};