# Length of Longest Palindromic Subsequence
# Given a sequence, find the length of the longest palindromic subsequence in it using dynamic programming.
#
# Palindrome is a string that reads the same backward as well as forward.
#
# Example:
#
# lps("ABABCBA") # 5

def lps(str):
    n=len(str)
    L=[[0 for x in range(n)] for x in range(n)]
    for i in range(n):
        L[i][i]=1
    for cl in range(2,n+1):
        for i in range(n-cl+1):
            j=i+cl-1
            if str[i]==str[j] and cl==2:
                L[i][j]=2
            elif str[i]==str[j]:
                L[i][j]=L[i+1][j-1]+2
            else:
                L[i][j]=max(L[i][j-1],L[i+1][j])
    return L[0][n-1]