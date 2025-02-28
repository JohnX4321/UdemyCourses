/*
 * Coding Exercise: Combinations Sum 2
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

Example :

Input: candidates = [3,5,2,1,3], target = 7
Output:
[
[1,3,3],
[5,2]
]
 */
var combinationSum2 = function(candidates, target) {
    //Write code here
    let res=[];
    candidates.sort((a,b)=>a-b);
    function helper(i,sum,currSum) {
        if (currSum===target) {
            res.push([...sum]);
            return;
        }
        if (currSum>target || i>candidates.length-1)
            return;
        let hash = {};
        for (let j=i;j<candidates.length;j++) {
            if (!hash[candidates[j]]) {
                hash[candidates[j]]=true;
                sum.push(candidates[j]);
                helper(j+1,sum,currSum+candidates[j]);
                sum.pop();
            }
        }
    }
    helper(0,[],0);
    return res;

};
