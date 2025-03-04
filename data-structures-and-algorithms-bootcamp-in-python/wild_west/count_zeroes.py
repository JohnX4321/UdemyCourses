# Divide and Conquer - countZeroes
# Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.
#
# countZeroes([1,1,1,1,0,0]) # 2
# countZeroes([1,0,0,0,0]) # 4
# countZeroes([0,0,0]) # 3
# countZeroes([1,1,1,1]) # 0
# Time Complexity - O(log n)

import math

def countZeroes(customList):
    l,r=0,len(customList)-1
    while l<=r:
        m=math.floor((l+r)/2)
        if customList[m]==1:
            l=m+1
        else:
            r=m-1
    return len(customList)-l