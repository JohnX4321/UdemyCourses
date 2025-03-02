/*
 * Coding Exercise: Radix Sort Algorithm
Question:

Radix Sort-You are given an array of non-negative integers. Write a function that will take this array as input and return the sorted array using Radix sort.
 */

const radixSort = function(array){
    //write code here
    if (array.length===0) return 'empty array';
    const greatestNumber=Math.max(...array);
    const numOfDig=Math.floor(Math.log10(greatestNumber))+1;
    for (let i=0;i<numOfDig;i++)
        countingSort(array,i);
    return array;
}

const countingSort = function (array,place){
    //write code here
    const res=new Array(array.length).fill(0);
    const z=new Array(10).fill(0);
    const digPlace = Math.pow(10,place);
    for (let num of array) {
        let dig=Math.floor(num/digPlace)%10;
        z[dig]++;
    }
    for (let i=1;i<10;i++)
        z[i]+=z[i-1];
    for (let j=array.length-1;j>-1;j--) {
        const cd=Math.floor(array[j]/digPlace)%10;
        z[cd]--;
        const ip=z[cd];
        res[ip]=array[j];
    }
    for (let i=0;i<res.length;i++)
        array[i]=res[i];
}
