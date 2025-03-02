/*
 * Coding Exercise: Two Sum
Question:

Two Sum - You are given an array of Integers and another integer targetValue. Write a function that will take these inputs and return the indices of the 2 integers in the array that add up targetValue.

Try:

Try to optimise your solution and arrive at a Time Complexity of O(n)

Check the Hints section to get a clue

All the best. Keep at it !
 */

function findIndicesSum(array,targetValue){
    //Write code here
    const m=[];
    let nv;
    for (let i=0;i<array.length;i++) {
        nv=targetValue-array[i];
        if (nv in m)
            return [i,m[nv]];
        else
            m[array[i]] = i;
    }
    return [];
}