/*
 * Coding Exercise: Combinations Sum 3
Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

Only numbers 1 through 9 are used.

Each number is used at most once.

Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

Example :

Input: k = 3, n = 6
Output: [[1,2,3]]
Explanation:
1 + 2 + 3 = 6
There are no other valid combinations.
 */
var combinationSum3 = function(k, n) {
    //Write Code here
    let res=[];
    let t=[];
    function dfs(i,s) {
        if(s===0) {
            if (t.length===k)
                res.push(t.slice());
            return;
        }
        if (i>9 || i>s || t.length>=k)
            return;
        t.push(i);
        dfs(i+1,s-i);
        t.pop();
        dfs(i+1,s);
    }
    dfs(1,n);
    return res;
};
