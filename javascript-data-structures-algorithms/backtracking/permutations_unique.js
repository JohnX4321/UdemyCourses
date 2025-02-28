/*
 * Coding Exercise: Permutations 2
Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.


 */
var permuteUnique = function(nums) {
    //Write code here
    let res=[];
    function helper(i) {
        if(i===nums.length-1) {
            res.push([...nums]);
            return;
        }
        let hash={};
        for(let j = i;j<nums.length;j++) {
            if(!hash[nums[j]]) {
                hash[nums[j]]=1;
                [nums[i],nums[j]]=[nums[j],nums[i]];
                helper(i+1);
                [nums[i],nums[j]]=[nums[j],nums[i]];
            }
        }
    };
    helper(0);
    return res;
};
