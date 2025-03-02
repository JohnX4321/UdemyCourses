/*
 * Coding Exercise: Matrix Chain Multiplication
Given a sequence of matrices, find the most efficient way to multiply these matrices together. The efficient way is the one that involves the least number of multiplications.

The dimensions of the matrices are given in an array arr[] of size N (such that N = number of matrices + 1) where the ith matrix has the dimensions (arr[i-1] x arr[i]).



Example:
Input: N = 4

arr = [2, 4, 6, 7]

Output: 132

Explanation: The matrices have dimensions  (2*4),(4*6),(6*7)

If we multiply the first two first, the number of multiplications needed are

48 +84=132

If we multiply the last two first, the number of multiplications needed are

168+56=224
 */
//r
function matrixMultiplication(N, arr) {
    //Write code here
    function f(i,j) {
        if (i===j) return 0;
        let c=Infinity;
        for (let k=i;k<j;k++) {
            let cc=f(i,k)+f(k+1,j)+arr[i-1]*arr[k]*arr[j];
            c=Math.min(c,cc);
        }
        return c;
    }
    return f(1,N-1);
}


//t
function matrixMultiplication(N, arr) {
    //Write code here
    let dp=Array.from({length: N},()=>Array(N).fill(0));

    for (let l=1;l<=N;l++) {
        for (let i=1;i<=N-l;i++) {
            let j=i+l-1;
            if (i===j)
                dp[i][j]=0;
            else {
                dp[i][j]=Infinity;
                for (let k=i;k<j;k++)
                    dp[i][j]=Math.min(dp[i][j],dp[i][k]+dp[k+1][j]+arr[i-1]*arr[k]*arr[j]);
            }
        }
    }
    return dp[1][N-1];
}

