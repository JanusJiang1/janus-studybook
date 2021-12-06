// 思路：
// 首先判断head不存在，则链表为空直接返还[]
// 创建新链表为null，从参数head开始循环，只要head存在，则赋值到新链表中，并断开head与后面的链接，继续循环（删除head）。


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 下个循环继续得到head,并把之前得到的新链表，赋值为head的next
// 直到最后一项当原链表为null，则所有的原链表项已经反转
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head)return null;
    let newHead=null;//创建新链表
    let nowHead=head;//得到现在需要反转的头部节点
    while(nowHead){//头部节点存在则触发继续循环
    let nextNode=nowHead.next;//把原head的next保存，
        nowHead.next=newHead;//把需要反转的头部，作为新链表的头部,得到新链表
        newHead=nowHead;//新链表存回去
        nowHead=nextNode;//断开原链表的头部
    }
    return newHead;


};
