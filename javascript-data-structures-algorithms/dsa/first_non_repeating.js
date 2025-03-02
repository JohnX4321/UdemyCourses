/*
 * Coding Exercise: First Non Repeating Character
Question:

Non repeating character - You are given a string consisting of only lower case and upper-case English Alphabets and integers 0 to 9. Write a function that will take this string as Input and return the index of the first character that is non-repeating.



Try to optimise your solution:

Brute Force method :
T=O(n^2), S=O(1)



Optimal Solution:
T=O(n), S=O(1)
 */

function findNonRepeatingCharacter(string){
    //Write code here
    const m={};
    for (let i=0;i<string.length;i++) {
        if (string[i] in m)
            m[string[i]]++;
        else
            m[string[i]]=1;
    }
    for (let i=0;i<string.length;i++)
        if (m[string[i]]===1) return i;
    return null;
}