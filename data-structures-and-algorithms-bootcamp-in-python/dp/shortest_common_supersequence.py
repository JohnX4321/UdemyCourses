# Shortest Common Supersequence Problem
# The shortest common super sequence (SCS) is the problem of finding the shortest super sequence supSeq of given sequences S1 and S2 such that both these sequences are subseqeunce of supSeq.
#
# Example
#
# S1 = "ABCBDAB"
# S2 = "BDCABA"
#
# SCSLength(S1, S2, len(S1), len(S2)) #9

def SCSLength(X, Y, m, n):
    if m==0 or n==0:
        return m+n
    if X[m-1]==Y[n-1]:
        return SCSLength(X,Y,m-1,n-1)+1
    return min(SCSLength(X,Y,m,n-1)+1,SCSLength(X,Y,m-1,n)+1)