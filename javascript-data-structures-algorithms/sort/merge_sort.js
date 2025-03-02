/*
 * Coding Exercise: Merge Sort
Question:

Merge Sort-You are given an array of integers. Write a function that will take this array as input and return the sorted array using Merge sort.
 */


function mergeSort(array){
    //write your code here
    if (array.length<=1) return array;
    let mid=Math.floor(array.length/2);
    let ls=mergeSort(array.slice(0,mid));
    let rs=mergeSort(array.slice(mid));
    return merge(ls,rs);
}

function merge(a1,a2) {
    let ma=[];
    let i=0,j=0;
    while (i<a1.length && j<a2.length) {
        if (a1[i]<=a2[j]){
            ma.push(a1[i]);
            i++;
        } else {
            ma.push(a2[j]);
            j++;
        }
    }
    while (i<a1.length) {
        ma.push(a1[i]);
        i++;
    }
    while (j<a2.length){
        ma.push(a2[j]);
        j++;
    }
    return ma;
}
