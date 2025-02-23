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
