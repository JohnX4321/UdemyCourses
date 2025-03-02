"""
Middle Function
Write a function called middle that takes a list and returns a new list that contains all but the first and last elements.

myList = [1, 2, 3, 4]
middle(myList)  # [2,3]
"""


def middle(lst):
    z=lst[:]
    z.pop(0)
    z.pop(-1)
    return z