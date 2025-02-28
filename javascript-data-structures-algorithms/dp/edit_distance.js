/*
 * Coding Exercise: Edit Distance
Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

•Insert a character

•Delete a character

•Replace a character

Example:

Input: word1 = "hodse", word2 = "dos"
Output: 3
Explanation:
hodse -> dodse (replace 'h' with 'd')
dodse -> dose (remove 'd')
dose -> dos (remove 'e')
 */
var minDistance = function(word1, word2) {
    //Write Code here
    let n=word1.length;
    let m=word2.length;

    let prev=new Array(m+1).fill(0);
    let curr=new Array(m+1).fill(0);
    for (let i=0;i<=m;i++)
        prev[i]=i;
    for (let i=1;i<=n;i++) {
        curr[0]=i;
        for (let j=1;j<=m;j++) {
            if (word1.charAt(i-1)===word2.charAt(j-1))
                curr[j]=prev[j-1];
            else {
                let replace=1+prev[j-1];
                let deleteOp=1+prev[j];
                let insert=1+curr[j-1];
                curr[j]=Math.min(replace,deleteOp,insert);
            }
        }
        prev=[...curr];
    }
    return prev[m];

};
