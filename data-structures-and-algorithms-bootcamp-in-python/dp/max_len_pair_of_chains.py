# Maximum Length Chain of Pairs
# You are given n pairs of numbers. In every pair, the first number is always smaller than the second number. A pair (c, d) can follow another pair (a, b) if b < c. Chain of pairs can be formed in this fashion. Find the longest chain which can be formed from a given set of pairs.
#
# Example
#
# If the given pairs are {{5, 24}, {39, 60}, {15, 28}, {27, 40}, {50, 90} }, then the longest chain that can be formed is of length 3, and the chain is {{5, 24}, {27, 40}, {50, 90}}

class Pair(object):
    def __init__(self, a, b):
        self.a = a
        self.b = b


def maxChainLength(arr, n):
    res=0
    mcl=[1 for i in range(n)]
    for i in range(1,n):
        for j in range(i):
            if(arr[i].a>arr[j].b and mcl[i]<mcl[j]+1):
                mcl[i]=mcl[j]+1
    for i in range(n):
        if res<mcl[i]:
            res=mcl[i]
    return res