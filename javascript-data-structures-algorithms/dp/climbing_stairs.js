/*
 * Coding Exercise: Climbing Stairs
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

n>=1

Example

Input: n = 2
Output: 2
Explanation: You can climb to the top in 2 ways.
A. 1 step + 1 step
B. 2 steps
 */
var climbStairs = function(n) {
    //Write code here
    if (n===0 || n===1) return 1;
    let dp=new Array(n+1).fill(0);
    dp[0]=dp[1]=1;
    for (let i=2;i<=n;i++)
        dp[i]=dp[i-1]+dp[i-2];
    return dp[n];


};
