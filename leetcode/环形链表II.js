

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
//思路: 遍历链表，所有节点的value存到list里，判断如果存在重复的节点就输出该节点
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
 
    let list=[];
    let current=head;
    while (current){
        if(list.includes(current)){
            return current;
        }
        list.push(current);
        current=current.next;
    }

    return null;
};