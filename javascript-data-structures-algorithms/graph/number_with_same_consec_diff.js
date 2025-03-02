/*
 * Coding Exercise: Numbers with same consecutive differences
Given two integers n and k, return an array of all the integers of length n where the difference between every two consecutive digits is k. You may return the answer in any order.

Note that the integers should not have leading zeros. Integers as 02 and 043 are not allowed.



Example 1:

Input: n = 3, k = 7
Output: [181,292,707,818,929]
Explanation: Note that 070 is not a valid number, because it has leading zeroes.
Example 2:

Input: n = 2, k = 1
Output: [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]
 */


var numsSameConsecDiff = function(n, k) {
    //Write code here

    const res=[];
    const bo=10**(n-1);
    
    const dfs = x=> {
        if (x>=bo) {
            res.push(x);
            return;
        }
        const last=x%10;
        if (last+k<10)
            dfs(x*10+last+k);
        if (k>0 && last-k>=0)
            dfs(x*10+last-k);
    };
    for (let i=1;i<10;i++)
        dfs(i);
    return res;
};
