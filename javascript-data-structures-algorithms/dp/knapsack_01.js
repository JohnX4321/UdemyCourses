/*
 * Coding Exercise: 01 Knapsack
You are provided with a set of N items, each with a specified weight and value. Your objective is to pack these items into a backpack with a weight limit of W, maximizing the total value of items in the backpack. Specifically, you have two arrays: val[0..N-1], representing the values of the items, and wt[0..N-1], indicating their weights. Additionally, you have a weight limit W for the backpack. The challenge is to determine the most valuable combination of items where the total weight does not exceed W. Note that each item is unique and indivisible, meaning it must be either taken as a whole or left entirely.



Input:
N = 3
W = 8
values[] = [2,3,9]
weight[] = [8,2,5]
Output: 12
Explanation: Choose the last 2 items that weighs 2 and 5 units respectively and hold values 3 and 9 that add up to 12.

 */
function knapSack(W, wt, val, n) {
    //Write Code here
    let dp=Array.from({length: n+1},() => Array(W+1).fill(0));
    for (let i=1;i<=n;i++) {
        for (let j=1;j<=W;j++) {
            const exc = dp[i-1][j];
            let inc = 0;
            if (wt[i-1]<=j)
                inc=val[i-1]+dp[i-1][j-wt[i-1]];
            dp[i][j]=Math.max(exc,inc);
        }
    }
    return dp[n][W];

}


function knapSack(W, wt, val, n) {
    //Write Code here
   let prev=Array(W+1).fill(0);
    let curr=Array(W+1).fill(0);
    for (let i=1;i<=n;i++) {
        for (let j=1;j<=W;j++) {
            const exc=prev[j];
            let inc=0;
            if (wt[i-1]<=j)
                inc=val[i-1]+prev[j-wt[i-1]];
            curr[j]=Math.max(exc,inc);
        }
        prev=curr.slice();
    }
    return curr[W];

}
