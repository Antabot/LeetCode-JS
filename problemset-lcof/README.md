# 剑指 Offer 题解思路

### lcof03-数组中重复的数字

找出数组中重复的数字。

在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

出处：[https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof](https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof)

该题重在数字范围确定，因此可使用同样长度的数组记录其出现次数。如范围不确定，可考虑使用 HashMap（JS 需要自己实现）。另外经过尝试，先快排再遍历比对超时😅。



### lcof04-二维数组中的查找

在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

出处：[https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/](https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/)

该题重在搜索方法。从上至下，从右至左搜索可以保证一个不漏，且可以筛选掉一部分值。

Tips: JS 中判断最好严格使用 ===，否则一些错误难以发现，比如 if 语句中单词拼写错误，结果恒为假但没有提示信息。

### lcof05-替换空格

请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

出处：[https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/](https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/)

JS 字符串可直接使用下标访问字符，但无法修改。编写字符串替换函数（split、join）后遍历判断即可。

### lcof06-从尾到头打印链表

输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

出处：[https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/](https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/)

由于 JS Array 的特性，可以遍历 push 再 reverse()，也可以递归。

### lcof07-重建二叉树

输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

出处：[https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/](https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/)

分治递归。（考虑使用迭代进一步提高效率）