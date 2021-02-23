# 剑指 Offer 题解思路

### lc03-数组中重复的数字

找出数组中重复的数字。

在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

出处：[https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof](https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof)

该题重在数字范围确定，因此可使用同样长度的数组记录其出现次数。如范围不确定，可考虑使用 HashMap（JS 需要自己实现）。另外经过尝试，先快排再遍历比对超时😅。
