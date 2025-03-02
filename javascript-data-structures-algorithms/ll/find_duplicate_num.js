/*
 * Coding Exercise: Find duplicate number
Question:

Find duplicate number-Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive. There is only one repeated number in nums, return this repeated number. You must solve the problem without modifying the array nums and uses only constant extra space.
 */

const getDuplicate = function(nums){
    //write your code here
    let fast=0,slow=0;
    while (true) {
        fast=nums[nums[fast]];
        slow=nums[slow];
        if (slow===fast) {
            let p=0;
            while (p!==slow){
                p=nums[p];
                slow=nums[slow];
            }
            return p;
        }
    }
}
