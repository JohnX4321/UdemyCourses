/*
 * Coding Exercise: Subsets
Question:

Power Set - Given an integer array of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.
 */
var subsets = function(nums) {
    //Write code here
    let res=[];
    function helper(i,subset) {
        if (i===nums.length) {
            res.push([...subset]); //copy of all elements
            return;
        }
        //without current
        helper(i+1,subset);
        subset.push(nums[i]);
        helper(i+1,subset);
        //backtrack
        subset.pop();
    }
    helper(0,[]);
    return res;

};
