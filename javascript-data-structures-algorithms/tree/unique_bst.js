/*
 * Coding Exercise: Unique BST 1
Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.
 */


var numTrees = function(n) {
    //write code here
    const res=new Array(n+1).fill(0);
    res[0]=1;
    for (let i=1;i<=n;i++) {
        for (let j=0;j<i;j++) {
            res[i]+=res[j]*res[i-j-1];
        }
    }
    return res[n];
};
