/*
 * Coding Exercise: 3 Sum
3 Sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]

such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example:

Input: nums = [-2,0,2,1,-1,-3]

Output: [[-2,0,2],[0,1,-1],[2,1,-3]]



Input: nums = [-1,2,6,-1,1]

Output: [[-1,2,-1]]
 */

function threeSum(nums) {
    //Write code here
    const res=new Set();
    for (let i=0;i<nums.length;i++) {
        const need=new Set();
        for (let j=i+1;j<nums.length;j++) {
            const v=-(nums[i]+nums[j]);
            if (need.has(v)) {
                const triplet=[nums[i],nums[j],v].sort((a,b)=>a-b);
                res.add(triplet.toString());
            }
            need.add(nums[j]);
        }
    }
    return Array.from(res).map(t => t.split(',').map(Number));
}