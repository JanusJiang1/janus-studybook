/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 思路：遍历链表，所有节点的value存到list里，判断如果存在重复的节点就输出true，否则就遍历完成输出false
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    // 遍历链表，所有节点的value存到list里，判断如果存在重复的节点就输出true，否则就遍历完成输出false
    let list=[];
    let current=head;
    while (current){
        if(list.includes(current)){
            return true;
        }
        list.push(current);
        current=current.next;
    }

    return false;
    
};