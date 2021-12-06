// 思路：
// 递归计算相加结果，如果不等于一，则保存结果，继续递归
// 直到出现计算结果为1（是快乐数），或者出现重复的项（不是快乐数）


/**
 * @param {number} n
 * @return {boolean}
 */
//当相加结果不等于1时，保存结果，若出现重复的结果循环，则判断不是快乐树
//若在递归过程中出现结果为1则是快乐树

var isHappy = function (n) {
    let recordList = new Set();
    while (true) {
        let numList = String(n).split(''); //拆解整数为数组
        let result = 0; //计算结果统计
        numList.forEach((item) => {
            result += Math.pow(Number(item), 2);
        });
        //如果结果为1就是快乐数
        if (result === 1) return true;

        // 不等于1时，判断该结果之前有无出现过，出现过则判断不是快乐树，没出现过则加入数组，继续递归。
        if (recordList.has(result)) {
            return false;
        } else {
            recordList.add(result);
            n = result;

        }
    }

};