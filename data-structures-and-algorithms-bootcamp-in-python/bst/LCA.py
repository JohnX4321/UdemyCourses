# First Common Ancestor - LeetCode 236
# Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree. Avoid storing additional nodes in a data structure. NOTE: This is not necessarily a binary search tree.

# First Common Ancestor

class Node:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.right = right
        self.left = left

def findNodeInTree(target,root):
    if not root:
        return False
    if target==root:
        return True
    else:
        return (findNodeInTree(target,root.left) or findNodeInTree(target, root.right))

def findFirstCommonAncestor(n1, n2, root):
    n1OnLeft=findNodeInTree(n1,root.left)
    n2OnLeft=findNodeInTree(n2,root.left)
    if n1OnLeft^n2OnLeft:
        return root
    else:
        if n1OnLeft:
            return findFirstCommonAncestor(n1,n2, root.left)
        else:
            return findFirstCommonAncestor(n1,n2,root.right)