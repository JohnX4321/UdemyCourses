# Divide and Conquer - sortedFrequency
# Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array.
#
# sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2) # 4
# sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3) # 1
# sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4) # -1
# sortedFrequency([], 4) # -1
# Time Complexity - O(log n)

# Divide and Conquer - sortedFrequency
import math

def sortedFrequency(arr, num):
    def binarySearchLeft(arr,num):
        l,r=0,len(arr)-1
        res=-1
        while l<=r:
            m=(l+r)//2
            if arr[m]==num:
                res=m
                r=m-1
            elif arr[m]<num:
                l=m+1
            else:
                r=m-1
        return res
    def binarySearchRight(arr,num):
        l,r=0,len(arr)-1
        res=-1
        while l<=r:
            m=(l+r)//2
            if arr[m]==num:
                res=m
                l=m+1
            elif arr[m]<num:
                l=m+1
            else:
                r=m-1
        return res

    lix=binarySearchLeft(arr, num)
    rix=binarySearchRight(arr,num)
    if lix==-1 or rix==-1:
        return -1
    return rix-lix+1