/*
 * Coding Exercise: Subsets 2
Given an integer array nums that may contain duplicates, return all possible

subsets

(the power set).



The solution set must not contain duplicate subsets. Return the solution in any order.



Example :

nums = [1,3,3]

Output =

[

[],

[1],

[3],

[1,3],

[3,3],

[1,3,3]

]
 */
var subsetsWithDup = function(nums) {
    //Write Code here
    let res=[];
    nums.sort((a,b) => a-b);
    function helper(i,subset) {
        if (i===nums.length) {
            res.push([...subset]);
            return;
        }
        subset.push(nums[i]);
        helper(i+1,subset);
        subset.pop();
        //exclude current and skip all duplicates
        while (i<nums.length-1 && nums[i]===nums[i+1])
            i++;
        helper(i+1,subset);
    }
    helper(0,[]);
    return res;

};
