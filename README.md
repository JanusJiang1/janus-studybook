# janus-studybook
记录学习中所练习的代码，或项

leecode —— 力扣算法练习

# 学习记录
## 2021-12-20
### 输出
【掘金】[分割链表](https://juejin.cn/post/7043839966253678606)  
【掘金】[分隔链表 ](https://juejin.cn/post/7043838948321263653)  
## 2021-12-17
### 输出
【掘金】[环路检测](https://juejin.cn/post/7043035246949826591/)  
【掘金】[设计链表](https://juejin.cn/post/7043034518810263565)  
【掘金】[删除链表的节点](https://juejin.cn/post/7043032437995077639) 
## 2021-12-16
### 输出
【掘金】[两数相加 II](https://juejin.cn/post/7042341233133355016)  
【掘金】[删除中间节点](https://juejin.cn/post/7042342670873821192)  
【掘金】[复制复杂链表](https://juejin.cn/post/7042343266565488648)  
## 2021-12-15
### 输出
【掘金】[链表中倒数第k个节点(快慢指针)](https://juejin.cn/post/7041989011535036453/)  
【掘金】[重排链表](https://juejin.cn/post/7041987661225000991)  

## 2021-12-14
### 输出
【掘金】[基本计算器 II](https://juejin.cn/post/7041601237699002382/)  
【掘金】[返回倒数第 k 个节点](https://juejin.cn/post/7041601116458450957)  
【掘金】[验证二叉树的前序序列化](https://juejin.cn/post/7041598137298845726)  

## 2021-12-13
### 输出
【掘金】[函数的独占时间](https://juejin.cn/post/7041240107239604232)  
【掘金】[表现良好的最长时间段](https://juejin.cn/post/7041244200603484190)  


## 2021-12-12
### 输出
【掘金】[设计循环队列](https://juejin.cn/post/7040852783859236894)  
【掘金】[设计循环双端队列](https://juejin.cn/post/7040856545017462792)  
【掘金】[设计前中后队列](https://juejin.cn/post/7040856066325741576)  
【掘金】[煎饼排序](https://juejin.cn/post/7040860133857394719)

## 2021-12-09
### 输出
【掘金】[复制带随机指针的链表](https://juejin.cn/post/7039770010822115335)

## 2021-12-08
### 输出
【掘金】[分隔链表](https://juejin.cn/post/7040862016134709261)



## 2021-12-06
### 输出

- 【代码】[环形链表](https://github.com/JanusJiang1/janus-studybook/blob/main/leetcode/%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8.js)
- 【代码】[环形链表二](https://github.com/JanusJiang1/janus-studybook/blob/main/leetcode/%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8II.js)
- 【代码】[快乐数](https://github.com/JanusJiang1/janus-studybook/blob/main/leetcode/%E5%BF%AB%E4%B9%90%E6%95%B0.js)
- 【代码】[反转链表](https://github.com/JanusJiang1/janus-studybook/blob/main/leetcode/%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8.js)

- 【代码】 [反转链表二](https://github.com/JanusJiang1/janus-studybook/blob/main/leetcode/%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8II.js)


### 遇到问题

链表的节点说到底是对象，对象不是引用类型吗？为什么在看题解时候，很多时候使用起来，却像是在使用基础值类型的变量，具体问题描述比较长，放在掘金了 [疑问](https://juejin.cn/post/7038483787096784904)

### 问题解决情况
已解决，问题在于，混淆了，复制对象，和复制指向某个对象指针的关系，只是复制了某个记录指针的变量，即使这个变量被重新赋值，也只是这个变相重新指向了别的指针而已，并没造成指向的对象值改变。




