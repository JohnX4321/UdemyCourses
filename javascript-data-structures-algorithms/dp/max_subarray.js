/*
 * Coding Exercise: Max Subarray
Given an integer array nums, find the subarray with the largest sum, and return its sum.

Example :

Input: nums = [1,2,-10,3,9]
Output: 12
Explanation: The subarray [3,9] has the largest sum 12.
 */

var maxSubArray = function(nums) {
    //Write code here
    let res=nums[0],me=nums[0];
    for (let i=0;i<nums.length;i++) {
        me=Math.max(me+nums[i],nums[i]);
        res=Math.max(res,me);
    }
    return res;
};
