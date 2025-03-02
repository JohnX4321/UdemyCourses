/*
 * Coding Exercise: Bubble Sort Algorithm
Question:

Bubble Sort - You are given an array of integers. Write a function that will take this array as input and return the sorted array using Bubble sort.
 */

function swap(array,i){
    let temp = array[i];
    array[i]=array[i+1];
    array[i+1]=temp;
}

function bubbleSort(array){
    //write your code here
    let so=false;
    let c=0;
    while (!so) {
        so=true;
        for (let i=0;i<array.length-1-c;i++) {
            if (array[i]>array[i+1]) {
                swap(array,i);
                so=false;
            }
        }
        c++;
    }
    return array;
}
