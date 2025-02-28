/*
 * You are given an array of n pairs pairs where pairs[i] = [lefti, righti] and lefti < righti.

A pair p2 = [c, d] follows a pair p1 = [a, b] if b < c. A chain of pairs can be formed in this fashion.

Return the length longest chain which can be formed.

You do not need to use up all the given intervals. You can select pairs in any order.



Example 1:

Input: pairs = [[2,3],[3,4],[4,5]]
Output: 2
Explanation: The longest chain is [2,3] -> [4,5].
 */

var findLongestChain = function(pairs) {
    //Write code here
    pairs.sort((a,b)=>a[0]-b[0]);
    let n=pairs.length;
    let dp=new Array(n+1).fill(1);
    let mx=1;
    for (let i=1;i<n;i++) {
        for (let j=0;j<i;j++) {
            if (pairs[j][1]<pairs[i][0] && 1+dp[j]>dp[i])
                dp[i]=1+dp[j];
        }
        mx=Math.max(mx,dp[i]);
    }
    return mx;
};
