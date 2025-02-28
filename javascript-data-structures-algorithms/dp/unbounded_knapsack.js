/*
 * Coding Exercise: Unbounded Knapsack
Given a set of N items, each with a weight and a value, represented by the array w and val respectively. Also, a knapsack with weight limit W.

The task is to fill the knapsack in such a way that we can get the maximum profit. Return the maximum profit.

Note: Each item can be taken any number of times.



Input:
N = 2
W = 3
val = [4, 2]
wt = [3, 1]
Output: 3
Explanation:
1.Pick the 2nd element thrice.
So, Total value = 2 + 2 + 2 = 6. and the total weight = 1 + 1 + 1  = 3
which is <= 3.
 */
function knapSack(N, W, val, wt) {
    //Write Code here
    const dp=Array.from({length:N+1},()=>Array(W+1).fill(0));
    for (let i=1;i<=N;i++) {
        for (let j=1;j<=W;j++) {
            const exc=dp[i-1][j];
            let inc=0;
            if (wt[i-1]<=j)
                inc=val[i-1]+dp[i][j-wt[i-1]];
            dp[i][j]=Math.max(exc,inc);
        }
    }
    return dp[N][W];
}
