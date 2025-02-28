/*
 * /*
 * You are given an array of Integers in which each subsequent value is not less than the previous value. Write a function that takes this array as an input and returns a new array with the squares of each number sorted in ascending order.

Remember

You can solve this question in multiple ways.

Think about the following -

1.What would be the brute force way of solving this question ? What would be the Time and Space complexity of this approach?

2.Is there a better way to solve this with a more optimum Time complexity than the Brute force way ?
 */
 */
function sortedSquarredArray(array){
    //write code here.make sure to return desired array
    const n = array.length;
    let res=new Array(n).fill(0);
    let start = 0,end = n-1;
    for (let i = n-1;i>-1;i--) {
        if (Math.abs(array[start]) >= Math.abs(array[end])) {
            res[i] = array[start] * array[start];
            start++;
        } else {
            res[i] = array[end] * array[end];
            end--;
        }
    }
    return res;
}