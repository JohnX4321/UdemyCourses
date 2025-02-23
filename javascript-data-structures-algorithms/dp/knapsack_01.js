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
