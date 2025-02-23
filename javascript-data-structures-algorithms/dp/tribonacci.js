var tribonacci = function(n) {
    //Write code here
    if (n===0) return 0;
    if (n===1 || n===2) return 1;
    let dp=new Array(n+1).fill(0);
    dp[1]=dp[2]=1;
    for (let i=3;i<n+1;i++)
        dp[i]=dp[i-1]+dp[i-2]+dp[i-3];
    return dp[n];
};
