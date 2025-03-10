//Recursion
/*
 * Coding Exercise: Fibonacci
Question:

Fibonacci - In the Fibonacci sequence, each subsequent term is obtained by adding the preceding 2 terms. This is true for all the numbers except the first 2 numbers of the Fibonacci series as they do not have 2 preceding numbers. The first 2 terms in the Fibonacci series is 0 and 1. F(n) = F(n-1)+F(n-2) for n>1. Write a function that finds F(n) given n where n is an integer greater than equal to 0. For the first term n = 0. (You can assume that no negative value will be passed. )

Try:

Try to optimise your solution. We will be discussing 3 solutions

Solution 1: T=O(2^n) , S=O(n)

Solution 2: T=O(n) , S=O(n)

Solution 3: T=O(n) , S=O(1) --- best




 */
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

