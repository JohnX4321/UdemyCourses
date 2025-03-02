/*
 * Coding Exercise: Binary Search Algorithm
Question:

Binary Search - Given an array of integers which is sorted in ascending order, and a target integer, write a function to search for whether the target integer is there in the given array. If it is there then return its index. Otherwise, return -1. You must write an algorithm with O(log n) runtime complexity.
 */

const binarySearch = function(nums,target){
    //write your code here
    let left = 0,right=nums.length-1;
    let mid;
    while (left<=right) {
        mid=Math.floor((left+right)/2);
        if (nums[mid]===target) return mid;
        if (nums[mid]>target)
            right=mid-1;
        else
            left=mid+1;
    }
    return -1;
}
