/*
 * Coding Exercise: Palindrom Partitioning 2 ( Min Cuts)
Palindrom Partitioning 2 :



Given a string s, partition s such that every substring of the partition is a palindrome.

Return the minimum cuts needed for a palindrome partitioning of s.

Example 1:

Input: s = "ppq"
Output: 1
Explanation: The palindrome partitioning ["pp","q"] could be produced using 1 cut.
 */

//recursion
var minCut = function(s) {
    //Write code here
    function isPalindrome(start,end) {
        while(start<end) {
            if (s[start]!==s[end]) return false;
            start++;
            end--;
        }
        return true;
    }

    function partitions(start,end) {
        if (start===end || isPalindrome(start,end))
            return 0;
        let minC = end-start;
        for (let ei=start;ei<end;ei++) {
            if (isPalindrome(start,ei))
                minC=Math.min(minC,1+partitions(ei+1,end));
        }
        return minC;
    }
    return partitions(0,s.length-1);

};

//memoization

var minCut = function(s) {
    //Write code here

    let n=s.length;
    let isPalindrome=Array.from(Array(n),()=>Array(n).fill(false));
    let minCuts=Array.from(Array(n),()=>Array(n).fill(null));

    for(let l=1;l<=n;l++) {
        for (let i=0;i<=n-l;i++) {
            let j=i+l-1;
            if (i===j)
                isPalindrome[i][j]=true;
            else if (s[i]===s[j] && (j===i+1 || isPalindrome[i+1][j-1]))
                isPalindrome[i][j]=true;
            else
                isPalindrome[i][j]=false;
        }
    }
    function partitions(start,end) {
        if (start===end || isPalindrome[start][end])
            return 0;
        if (minCuts[start][end]!==null)
            return minCuts[start][end];
        let minC = end-start;
        for (let ei=start;ei<end;ei++) {
            if (isPalindrome[start][ei])
                minC=Math.min(minC,1+partitions(ei+1,end));
        }
        minCuts[start][end]=minC;
        return minC;
    }
    return partitions(0,s.length-1);


};


var minCut = function(s) {
    //Write code here
    let n=s.length;
    let dp=Array.from(Array(n),()=>Array(n).fill(0));
    for(let l=1;l<=n;l++) {
        for (let i=0;i<=n-l;i++) {
            let j=i+l-1;
            if (i===j)
                dp[i][j]=0;
            else if (s[i]===s[j] && ( dp[i+1][j-1]===0))
                dp[i][j]=0;
            else {
                dp[i][j]=j-i;
                for (let k=i;k<j;k++)
                    dp[i][j]=Math.min(dp[i][j],1+dp[i][k]+dp[k+1][j]);
            }
        }
    }
    return dp[0][n-1];
};

var minCut = function(s) {
    //Write code here
    let n=s.length;
    let isPalindrome=Array.from(Array(n),()=>Array(n).fill(false));


    for(let l=1;l<=n;l++) {
        for (let i=0;i<=n-l;i++) {
            let j=i+l-1;
            if (i===j)
                isPalindrome[i][j]=true;
            else if (s[i]===s[j] && (j===i+1 || isPalindrome[i+1][j-1]))
                isPalindrome[i][j]=true;
            else
                isPalindrome[i][j]=false;
        }
    }

    let dp=Array(n).fill(0);
    for (let end =0;end<n;end++) {
        let minCuts = end;
        for (let start=0;start<=end;start++){
            if (isPalindrome[start][end]) {
                if (start===0) minCuts=0;
                else minCuts=Math.min(minCuts,1+dp[start-1]);
            }
        }
        dp[end]=minCuts;
    }
    return dp[n-1];

};