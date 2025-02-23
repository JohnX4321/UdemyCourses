//Recursion

var fib = function(n) {
    //Write code here
    if(n<=1) return n;
    return fib(n-1)+fib(n-2);


};

//Memoization
var fib = function(n) {
    //Write code here
    let memo={0:0,1:1};
    function solve(num) {
        if (memo[num]!==undefined) return memo[num];
        memo[num]=solve(num-1)+solve(num-2);
        return memo[num];
    }
    return solve(n);

};

//Tabulation
var fib = function(n) {
    //Write code here
    let dp=new Array(n+1).fill(0);
    dp[0]=0;
    if (n>0) dp[1]=1;
    let res=1;
    while(res<n){
        res+=1;
        dp[res]=dp[res-1]+dp[res-2];
    }
    return dp[n];
};


//Optimized Tabulation
var fib = function(n) {
    //Write code here
    if(n<=1) return n;
    let prev=0,curr=1,c=1;
    while(c<n) {
        let nx=prev+curr;
        prev=curr;
        curr=nx;
        c+=1;
    }
    return curr;
};

