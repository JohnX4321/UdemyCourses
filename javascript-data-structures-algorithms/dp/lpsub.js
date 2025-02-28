/*
 * Coding Exercise: Longest Palindromic Subsequence
Given a string s, find the longest palindromic subsequence's length in s.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.



Example :

Input: s = "cccacpc"
Output: 5
Explanation: One possible longest palindromic subsequence is "ccccc".

 */

var longestPalindromeSubseq = function(s) {
    //Write code here
    let n = s.length;
    let dp=Array.from({length:n},()=>Array(n).fill(0));
    for (let l=1;l<=n;l++) {
        for (let i=0;i<=n-l;i++) {
            let j=i+l-1;
            if (i===j)
                dp[i][j]=1;
            else if (s[i]===s[j])
                dp[i][j]=2+dp[i+1][j-1];
            else
                dp[i][j]=Math.max(dp[i+1][j],dp[i][j-1]);
        }
    }
    return dp[0][n-1];
};
