/*
 * Coding Exercise: Is Palindrome ?
Question:
Palindrome-You are given a string. Write a function to check whether the string is a palindrome or not.



Try:

To optimise your solution. We will discuss 3 solutions with the following Time and Space complexities

Solution 1:

T=O(n^2) , S=O(n)

Solution 2:

T=O(n) , S=O(n)

Solution 3:

T=O(n) , S=O(1)



Keep at it ! All the best
 */

function isPalindromeCheck(string){
    //write code here
    let i=0,j=string.length-1;
    while (i<=j) {
        if (string[i]!==string[j]) return false;
        else {
            i++;
            j--;
        }
    }
    return true;
}
