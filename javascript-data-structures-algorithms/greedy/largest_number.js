/*
 * Coding Exercise: Largest Number
Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

Since the result may be very large, so you need to return a string instead of an integer.



Example 1:

Input: nums = [10,2]
Output: "210"
 */

var largestNumber = function(nums) {
    //Write code here
    nums.sort((a,b) => {
        const [ab,ba] = [String(a)+String(b),String(b)+String(a)];
        return +ba - +ab;
    });
    return nums[0]?nums.join(''):'0';

};
