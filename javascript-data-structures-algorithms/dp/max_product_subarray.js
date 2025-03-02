/*
 * Coding Exercise: Maximum Product Subarray
Given an integer array nums, find a subarray that has the largest product, and return the product.



Example :

Input: nums = [3,3,-2,4]
Output: 9
Explanation: [3,3] has the largest product 9.
 */

var maxProduct = function(nums) {
    //Write code here
    let res=-1*Infinity;
    let prod=1;
    for (let i=0;i<nums.length;i++) {
        prod*=nums[i];
        res=Math.max(res,prod);
        if (prod===0)
            prod=1;
    }
    prod=1;
    for (let i=nums.length-1;i>-1;i--) {
        prod*=nums[i];
        res=Math.max(prod,res);
        if (prod===0)
            prod=1;
    }
    return res;
};
