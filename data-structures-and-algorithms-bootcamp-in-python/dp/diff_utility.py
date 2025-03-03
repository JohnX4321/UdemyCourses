# Diff Utility
# Given two similar strings, implement your own diff utility to list out all differences between them.
#
# Diff Utility : It is a data comparison tool that calculates and displays the differences between two text.
#
# Example
#
# Input:
#
# S1 = 'XMJYAUZ'
# S2 = 'XMJAATZ'
# Output:
#
# XMJ-YA-U+A+TZ
#
# - indicates that character is deleted from S2 but it was present in S1
#
# + indicates that character is inserted in S2 but it was not present in S1
#
# Hint:
#
# You can use Longest Common Subsequence (LCS) to solve this problem. The idea is to find a longest sequence of characters that is present in both original sequences in the same order. From a longest common subsequence it is only a small step to get diff-like output:
#
# if a character is absent in the subsequence but present in the first original sequence, it must have been deleted (indicated by the '-' marks)
#
# if it is absent in the subsequence but present in the second original sequence, it must have been inserted (indicated by the '+' marks)


lookup = [[0 for x in range(len(S2) + 1)] for y in range(len(S1) + 1)]

def LCSLength(S1, S2, m, n, lookup):
    for i in range(m + 1):
        lookup[i][0] = 0
    for j in range(n + 1):
        lookup[0][j] = 0
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if S1[i - 1] == S2[j - 1]:
                lookup[i][j] = lookup[i - 1][j - 1] + 1
            else:
                lookup[i][j] = max(lookup[i - 1][j], lookup[i][j - 1])

# Function to display the differences between two Strings
def diff(S1, S2, m, n, lookup):
    # if last character of S1 and S2 matches
    if m>0 and n>0 and S1[m-1]==S2[n-1]:
        diff(S1,S2,m-1,n-1,lookup)
        print("",S1[m-1],end='')
    # current character of S2 is present not in S1
    elif n>0 and (m==0 or lookup[m][n-1]>=lookup[m-1][n]):
        diff(S1,S2,m,n-1,lookup)
        print(" +"+S2[n-1],end='')
    # current character of S1 is present not in S2
    elif m>0 and (n==0 or lookup[m][n-1]<lookup[m-1][n]):
        diff(S1,S2,m-1,n,lookup)
        print(" -"+S1[m-1],end='')