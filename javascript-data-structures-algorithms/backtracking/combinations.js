/*
 * Coding Exercise: Combinations
Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

You may return the answer in any order.

Example:

n = 4

k=2

Output =

[

[1,2],[1,3],[1,4],

[2,3],[2,4],

[3,4]

]
 */
var combine = function(n, k) {
    //Write Code here
    let res=[];
    function helper(i,subset) {
        if (subset.length===k) {
            res.push([...subset]);
            return;
        }
        for (let j=i;j<=n;j++) {
            subset.push(j);
            helper(j+1,subset);
            subset.pop();
        }
    }
    helper(1,[]);
    return res;
};
