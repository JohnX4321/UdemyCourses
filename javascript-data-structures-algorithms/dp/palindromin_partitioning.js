/*
 * Coding Exercise: Palindrome Partitioning
Given a string s, partition s such that every

substring

of the partition is a

palindrome

. Return all possible palindrome partitioning of s.

Example 1:

Input: s = "ppq"
Output: [["p","p","q"],["pp","q"]]
 */

var partition = function(s) {
    //Write code here
    let n=s.length;
    let dp=Array.from(Array(n),()=>Array(n).fill(false));
    for (let l=1;l<=n;l++) {
        for (let i=0;i<=n-l;i++) {
            let j=i+l-1;
            if (i===j)
                dp[i][j]=true;
            else if (s[i]===s[j] && (j===i+1 || dp[i+1][j-1]))
                dp[i][j]=true;
            else
                dp[i][j]=false;
        }
    }
    let res=[];
    function helper(ix,curr) {
        if (ix>n-1) {
            res.push(Array.from(curr));
            return;
        }
        for (let i=ix;i<n;i++) {
            if (dp[ix][i]) {
                curr.push(s.substring(ix,i+1));
                helper(i+1,curr);
                curr.pop();
            }
        }
    }
    helper(0,[]);
    return res;
};
