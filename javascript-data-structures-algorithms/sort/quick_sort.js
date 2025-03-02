/*
 * Coding Exercise: Quick Sort
Question:

Quick Sort-You are given an array of integers. Write a function that will take this array as input and return the sorted array using Quick sort.
 */

function swap(array,i,j){
    //Write code
    let z=array[i];
    array[i]=array[j];
    array[j]=z;
}

function partition(array, start=0,end=array.length-1){
    //write code
    let mid=Math.floor((start+end)/2);
    swap(array,start,mid);
    let pivot=array[start],i=start+1,j=end;
    while (i<=j) {
        while (array[i]<=pivot)
            i++;
        while (array[j]>pivot)
            j--;
        if (i<j) swap(array,i,j);
    }
    swap(array,start,j);
    return j;
}

function quickSort(array,start=0,end=array.length-1){
    //write code
    while (start<end){
        let pix=partition(array,start,end);
        if (pix-start<end-pix) {
            quickSort(array,start,pix-1);
            start=pix+1;
        } else {
            quickSort(array,pix+1,end);
            end=pix-1;
        }
    }
}