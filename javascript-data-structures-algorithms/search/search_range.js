/*
 * Coding Exercise: Search for range
Question:

Find First and Last Position of Element in Sorted Array-You are given an array of integers sorted in non-decreasing order, find the starting and ending position of a given target value. If target is not found in the array, return [-1, -1]. You must write an algorithm with O(log n) runtime complexity.

Try:

Try to write both the iterative solution and recursive solution
 */

const searchForRange = function(array,target){
    //Write your code here
    const le=findLeftExtreme(array,target);
    const ri=findRightExtreme(array,target);
    return [le,ri];
}

const findLeftExtreme=function(array,target) {
    let left=0,right=array.length-1,mid;
    while (left<=right) {
        mid=Math.floor((left+right)/2);
        if (target===array[mid]) {
            if (mid===0) return 0;
            if (array[mid-1]===target) right=mid-1;
            else return mid;
        }
        else if (target<array[mid])
            right=mid-1;
        else
            left=mid+1;
    }
    return -1;
}

const findRightExtreme=function (array,target) {
    let left=0,right=array.length-1,mid;
    while (left<=right) {
        mid=Math.floor((left+right)/2);
        if (target===array[mid]) {
            if (mid===array.length-1) return mid;
            if (array[mid+1]===target) left=mid+1;
            else return mid;
        } else if (target<array[mid])
            right=mid-1;
        else
            left=mid+1;
    }
    return -1;
}

