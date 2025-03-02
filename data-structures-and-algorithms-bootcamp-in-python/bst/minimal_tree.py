"""
Minimal Tree
Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.

Example

sortedArray = [1,2,3,4,5,6,7,8,9]
minimalTree(sortedArray)

#Output

_5__
/    \
3    8
/ \  / \
2 4  7 9
/    /
1    6
"""

class BSTNode:
    def __init__(self, data=None, left = None, right= None):
        self.data = data
        self.left = left
        self.right = right

def minimalTree(sortedArray):
    if len(sortedArray)==0:
        return None
    if len(sortedArray)==1:
        return BSTNode(sortedArray[0])
    mid=int(len(sortedArray)/2)
    left=minimalTree(sortedArray[:mid])
    right=minimalTree(sortedArray[mid+1:])
    return BSTNode(sortedArray[mid],left,right)