# Longest Common Subsequence problem
# S1 and S2 are given strings, create a function to print all possible longest subsequence which is common to both strings.
#
# Subsequence: a sequence that can be driven from another sequence by deleting some elements without changing the order of them
#
# Example
#
# Input:
#
# S1 = "ABCBDAB"
# S2 = "BDCABA"
#
# Ouput:
#
# "BCAB"
# "BCBA"
# "BDAB"

T = [[0 for x in range(n + 1)] for y in range(m + 1)]
def LCS(X,Y,m,n,T):
    # return empty string if we have reached the end of
    # either sequence
    if m==0 or n==0:
        return ""
    # if last character of X and Y matches
    if X[m-1]==Y[n-1]:
        # append current character (X[m-1] or Y[n-1]) to LCS of
        # substring X[0..m-2] and Y[0..n-2]
        return LCS(X,Y,m-1,n-1,T)+X[m-1]
    # else when the last character of X and Y are different

    # if top cell of current cell has more value than the left
    # cell, then drop current character of X and find LCS
    # of substring X[0..m-2], Y[0..n-1]
    if T[m-1][n]>T[m][n-1]:
        return LCS(X,Y,m-1,n,T)
    else:
        return LCS(X,Y,m,n-1,T)
    
