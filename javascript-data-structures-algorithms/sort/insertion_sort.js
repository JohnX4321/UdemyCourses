/*
 * Coding Exercise : Insertion Sort Algorithm
Question:

Insertion Sort -You are given an array of integers. Write a function that will take this array as input and return the sorted array using Insertion sort.
 */

const insertionSort =function (array){
    //write your code here
    for (let i=1;i<array.length;i++) {
        let j=i-1;
        let z=array[i];
        while (j>=0 && array[j]>z){
            array[j+1]=array[j];
            j--;
        }
        array[j+1]=z;
    }
    return array;
}