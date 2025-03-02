/*
 * Coding Exercise: Word Break
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.



Example :

Input: s = "jackson", wordDict = ["jack","son"]
Output: true
Explanation: Return true because "jackson" can be segmented as "jack son".
 */

//tabulation
var wordBreak = function(s, wordDict) {
    //Write code here
    const n=s.length;
    const dp=Array.from({length:n},()=>Array(n).fill(false));

    for (let l=1;l<=n;l++) {
        for (let i=0;i<=n-l;i++) {
            let j=i+l-1;
            if (wordDict.includes(s.slice(j+1)))
                dp[i][j]=true;
            else
                for (let k=i;k<j;k++)
                    dp[i][j]=dp[i][j] || (dp[i][k]&&dp[k+1][j]);
        }
    }
    return dp[0][n-1];
};


//memo
var wordBreak = function(s, wordDict) {
    const n=s.length;
    const dp=Array(n).fill(false);


        for (let i=0;i<=n;i++) {
            for (let word of wordDict) {
                if (i<word.length-1)
                    continue;
                else if (s.substring(i-word.length+1,i+1)===word) {
                    if (i===word.length-1 || dp[i-word.length]) {
                        dp[i]=true;
                        break;
                    }
                }
            }
         }

    return dp[n-1];
}