/*
 * Coding Exercise: Minimum Cost Climbing Stairs
You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.

Example 1:

Input: cost = [10,20,30]
Output: 20
Explanation: You will start at index 1.
- Pay 20 and climb two steps
 */
var minCostClimbingStairs = function(cost) {
    //Write Code here
    let n=cost.length;
    if (n===0) return 0;
    if (n===1) return cost[0];
    let dp=new Array(n+1).fill(0);
    for (let i=0;i<n;i++) {
        if (i<2) dp[i]=cost[i];
        else dp[i]=cost[i]+Math.min(dp[i-1],dp[i-2]);
    }
    return Math.min(dp[n-1],dp[n-2]);
};
