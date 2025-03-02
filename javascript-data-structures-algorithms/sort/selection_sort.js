/*
 * Coding Exercise: Selection Sort Algorithm
Question:

Selection Sort-You are given an array of integers. Write a function that will take this array as input and return the sorted array using Selection sort.
 */

const selectionSort = function(nums){
    //write your code here
    for (let i=0;i<nums.length;i++) {
        let sm=i;
        for (let j=i+1;j<nums.length;j++)
            if (nums[j]<nums[sm]) sm=j;
        if (i!==sm) {
            let z=nums[i];
            nums[i]=nums[sm];
            nums[sm]=z;
        }
    }
    return nums;
}
