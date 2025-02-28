/*
 * An array is monotonic if it is either monotone increasing or monotone decreasing. An array is monotone increasing if all its elements from left to right are non-decreasing. An array is monotone decreasing if all  its elements from left to right are non-increasing. Given an integer array return true if the given array is monotonic, or false otherwise.
 */

const checkMonotonic = function (array){
    //write code here to return either true or false
    const n = array.length;
    if (n===1) return true;
    let isInc = true, isDec = true;
    for (let i=1;i<n;i++) {
        if (!isInc && !isDec) return false;
        if (array[i]<array[i-1]) isInc = false;
        if (array[i]>array[i-1]) isDec = false;
    }
    return isDec || isInc;

}

