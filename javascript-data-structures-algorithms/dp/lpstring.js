/*
 * Coding Exercise: Longest Palindromic Substring
Given a string s, return the longest  palindromic substring in s.



Example :

Input: s = "pabad"
Output: "aba"
 */

var longestPalindrome = function(s) {
    //Write code here
    let n=s.length;
    let dp=Array.from(Array(n),()=>Array(n).fill(false));
    let res='';

    for (let l=1;l<=n;l++) {
        for (let i=0;i<=n-l;i++) {
            let j=i+l-1;
            if (i===j)
                dp[i][j]=true;
            else if (s[i]===s[j] && (j===i+1 || dp[i+1][j-1])) {
                dp[i][j]=true;
            }
            else
                dp[i][j]=false;
            if (dp[i][j])
                res=s.slice(i,j+1);
        }
    }
    return res;
};
