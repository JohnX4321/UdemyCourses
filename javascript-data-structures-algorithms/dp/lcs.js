/*
 * Coding Exercise: LCS ( Longest Common Subsequence)
Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

•For example, "ace" is a subsequence of "abcde".

A common subsequence of two strings is a subsequence that is common to both strings.

Example:

Input: text1 = "pbcdq", text2 = "pcq"
Output: 3
Explanation: The longest common subsequence is "pcq" and its length is 3.
 */
var longestCommonSubsequence = function(text1, text2) {
    //Write code here
    const m=text1.length;
    const n=text2.length;
    let prev=new Array(n+1).fill(0);
    const curr=new Array(n+1).fill(0);

    for (let i=1;i<=m;i++) {
        for (let j=1;j<=n;j++) {
            if (text1[i-1]===text2[j-1])
                curr[j]=1+prev[j-1]
            else
                curr[j]=Math.max(curr[j-1],prev[j])
        }
        prev=[...curr];
    }
    return curr[n];
};
