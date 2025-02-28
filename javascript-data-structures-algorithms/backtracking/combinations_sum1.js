/*
 * Coding Exercise: Combinations Sum 1
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

(the integers in the candidates array are all non negative )

Example 1:

Input: candidates = [2,3,8,9], target = 9
Output: [[2,2,2,3],[3,3,3],[9]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 2+ 3 = 9. Note that 2 can be used multiple times.
3 is a candidate and 3+3+3 = 9.
9 is a candidate, and 9 = 9.
These are the only two combinations.
 */
var combinationSum = function(candidates, target) {
    //Write code here
    let res=[];
    function helper(i,sum,currSum) {
        if(currSum>target)
            return;
        if (currSum===target) {
            res.push([...sum]);
            return;
        }
        for (let j=i;j<candidates.length;j++) {
            sum.push(candidates[j]);
            helper(j,sum,currSum+candidates[j]);
            sum.pop();
        }
    }
    helper(0,[],0);
    return res;
};
