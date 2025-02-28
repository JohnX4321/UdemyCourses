/*
 * Coding Exercise: Partition Equal Subset Sum
Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.



Example 1:

Input: nums = [1,5,20,14]
Output: true
Explanation: The array can be partitioned as [1, 5, 14] and [20].
 */
var canPartition = function(nums) {
    //Write code here
    const s=nums.reduce((a,b)=>a+b,0);
    if (s%2===1) return false;
    const n=nums.length;
    const m=s>>1;
    const f=Array.from({length:n+1},()=>Array(m+1).fill(false));
    f[0][0]=true;
    for (let i=1;i<=n;i++) {
        const x=nums[i-1];
        for (let j=0;j<=m;j++) {
            f[i][j]=f[i-1][j]||(j>=x&&f[i-1][j-x]);
        }
    }
    return f[n][m];
};
