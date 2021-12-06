// 解题思路:
// 此处撰写解题思路
// 主体上类似于反转列表
// 找到记录需要反转的区域，前后的节点，注意从第一个开始反转会出现找不到left-1节点的情况
// 反转中间部分
// 再和前后拼接

// 代码

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {nextNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    //手动添加一个节点，处理可能从头部开始反转的问题
    let firstNode= new ListNode('q');
    firstNode.next=head;
    // 找到left节点的头一个节点
    let pre=firstNode;
    for(let i=0;i<(left-1);i++){
        pre=pre.next;
    }
    //找到right
       let rightNode = pre;
    for (let i = 0; i < right - left + 1; i++) {
        rightNode = rightNode.next;
    }
    //切出链表
    let leftNode = pre.next;
    let curr = rightNode.next;
    // 切断链接
        pre.next = null;
    rightNode.next = null;
    getResList(leftNode);

 // 接回链表
    pre.next = rightNode;
    leftNode.next = curr;
    return firstNode.next




};
var getResList=function(head){
        let newHead=null;//新头部节点
    let nowHead=head;//当前要处理的头部节点

    while (nowHead){
        let nextNode=nowHead.next;
        nowHead.next=newHead;
        newHead=nowHead;
        nowHead=nextNode;
        
    }
    return newHead;

}

