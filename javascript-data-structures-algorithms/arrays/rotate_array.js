/*
 * Coding Exercise: Rotate Array
Question:

Given an array, rotate the array to the right by k steps, where k is non-negative.

Try :

After you have solved this question, think about whether you can solve it in constant space
 */

const rotateArray = function (array,k){
    //Write code here
    return rotate(array,k);
}

const reverse=function (nums,start,end) {
    while (start<end) {
        [nums[start],nums[end]] = [nums[end],nums[start]];
        start++;
        end--;
    }
}

const rotate=function (nums,k) {
    k=k%nums.length;
    reverse(nums,0,nums.length-1);
    reverse(nums,0,k-1);
    reverse(nums,k,nums.length-1);
    return nums;
}