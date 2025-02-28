/*
 * Coding Exercise: Palindromic Substrings
Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.



Example 1:

Input: s = "pqrp"
Output: 4
Explanation: Three palindromic strings: "p", "q", "r","p".
 */

var countSubstrings = function(s) {
    //Write code here
    let n=s.length;
    let res=0;
    let dp=Array.from(Array(n),()=>Array(n).fill(false));
    for (let l=1;l<=n;l++) {
        for (let i=0;i<=n-l;i++) {
            let j=i+l-1;
            if (i===j) {
                dp[i][j]=true;
                res+=1;
            }  else if (s[i]===s[j] && (j===i+1 || dp[i+1][j-1])) {
                dp[i][j]=true;
                res+=1;
            } else {
                dp[i][j]=false;
            }
        }
    }
    return res;

};

var countSubstrings = function(s) {

    let n=s.length;
    let dp=Array.from(Array(n),()=>Array(n).fill(-1));

    function helper(i,j){
        if (i===j){
            dp[i][j]=true;
            return dp[i][j];
        }
        if (dp[i][j]!==-1) {
            return dp[i][j];
        }
        helper(i+1,j);
        helper(i,j-1);
        dp[i][j] = !!(s[i] === s[j] && (j === i || helper(i + 1, j - 1)));
    }

    helper(0,n-1);

    let res=0;
    for (let l=1;l<=n;l++) {
        for (let i=0;i<=n-l;i++) {
            let j=i+l-1;
            if (dp[i][j]===true)
                res++;
        }
    }

}
