# Check Balanced - LeetCode 110
# Implement a function to check if a binary tree is balanced. For the purposes of this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one.

# Balanced Tree

class Node():
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right



def isBalanced(root):
    return helper(root)>-1

def helper(root):
    if root is None:
        return 0
    lh=helper(root.left)
    if lh==-1:
        return -1
    rh=helper(root.right)
    if rh==-1:
        return -1
    if abs(lh-rh)>1:
        return -1
    return max(lh,rh)+1