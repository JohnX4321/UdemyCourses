"""
Max Product of Two Integers
Find the maximum product of two integers in an array where all elements are positive.

Example

arr = [1, 7, 3, 4, 9, 5]
max_product(arr) # Output: 63 (9*7)"""

def max_product(arr):
    arr.sort()
    return arr[-1]*arr[-2]