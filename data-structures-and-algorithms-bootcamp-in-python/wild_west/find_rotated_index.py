# Divide and Conquer - findRotatedIndex
# Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of the integer in the array. If the value is not found, return -1.
#
# Constraints:
#
# Time Complexity - O(log n)
#
#                     Space Complexity - O(1)
#
#                     findRotatedIndex([3, 4, 1, 2], 4) # 1
#                     findRotatedIndex([4, 6, 7, 8, 9, 1, 2, 3, 4], 8) # 3
#                     findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) # 6
#                     findRotatedIndex([37, 44, 66, 102, 10, 22], 14) # -1
#                     findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) # -1
#                     findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16) # 5
#                     findRotatedIndex([11, 12, 13, 17, 39], 17) # 3
#                     findRotatedIndex([11], 11) # 0
#                     findRotatedIndex([], 11) # -1
#                     findRotatedIndex([4, 4, 4, 4, 4], 5) # -1

# Divide and Conquer - findRotatedIndex
import math

def findRotatedIndex(arr, num):
    l,r=0,len(arr)-1
    if r>0 and arr[l]>=arr[r]:
        m=(l+r)//2
        while arr[m]<=arr[m+1]:
            if arr[l]<=arr[m]:
                l=m+1
            else:
                r=m-1
            m=(l+r)//2
            if m+1>len(arr)-1:
                break
        if num>=arr[0] and num<=arr[m]:
            l=0
            r=m
        else:
            l=m+1
            r=len(arr)-1
    while l<=r:
        m=(l+r)//2
        if num==arr[m]:
            return m
        if num>arr[m]:
            l=m+1
        else:
            r=m-1
    return -1