# Longest repeated Subsequence Length problem
# Create a function to find the length of Longest Repeated Subsequence. The longest repeated subsequence (LRS) is the longest subsequence of a string that occurs at least twice.
#
# Example
#
# LRSLength('ATAKTKGGA',9,9) # 4 LRS = ATKG
# Note: 9 is the length of the string.

def LRSLength(X, m, n):
    if m==0 or n==0:
        return 0
    if X[m-1]==X[n-1] and m!=n:
        return LRSLength(X,m-1,n-1)+1
    return max(LRSLength(X,m,n-1),LRSLength(X,m-1,n))