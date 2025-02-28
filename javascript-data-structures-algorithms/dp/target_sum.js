/*
 * Coding Exercise: Target Sum
You are given an integer array nums and an integer target.

You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".

Return the number of different expressions that you can build, which evaluates to target.

Example 1:

Input: nums = [1,1,1,1], target = 2
Output: 4
Explanation: There are 4 ways to assign symbols to make the sum of nums be target 2.
-1 + 1 + 1 + 1  = 2
+1 - 1 + 1 + 1  = 2
+1 + 1 - 1 + 1  = 2
+1 + 1 + 1 - 1  = 2
 */
var findTargetSumWays = function(nums, target) {
    //Write Code here
    const s=nums.reduce((a,b)=>a+b);
    if (s<target || (s-target)%2) return 0;
    const [m,n] = [nums.length,((s-target)/2)|0];
    const f=Array.from({length:m+1},()=>Array(n+1).fill(0));
    f[0][0]=1;
    for (let i=1;i<=m;i++) {
        for (let j=0;j<=n;j++){
            f[i][j]=f[i-1][j];
            if (j>=nums[i-1])
                f[i][j]+=f[i-1][j-nums[i-1]];
        }
    }
    return f[m][n];

};
