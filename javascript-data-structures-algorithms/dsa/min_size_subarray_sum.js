/*
 * Min Size Subarray Sum
Minimum Size Subarray Sum:
Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Example:

target = 15

nums = [5, 1, 3, 5, 10, 7, 4, 9, 2, 8]

expected = 2
 */

function minSubArrayLen(target, nums) {
    //Write code here
    let left=0,cs=0,len=Infinity;
    for (let right=0;right<nums.length;right++) {
        cs+=nums[right];
        while (cs>=target){
            const newLen=right-left+1;
            len=Math.min(len,newLen);
            cs-=nums[left];
            left+=1;
        }
    }
    return len!==Infinity?len:0;
}