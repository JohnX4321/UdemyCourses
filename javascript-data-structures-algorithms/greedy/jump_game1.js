/*
 * Coding Exercise: Jump Game 1
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.
 */

var canJump = function(nums) {
    //Write code here
    let n=nums.length;
    let mi=0;
    for (let i=0;i<n;i++) {
        if (i>mi) return false;
        mi=Math.max(mi,i+nums[i]);
        if (mi>=n-1) return true;
    }
};