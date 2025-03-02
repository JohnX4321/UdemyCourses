class TreeNode:
    def __init__(self, value):
        self.val = value
        self.left = None
        self.right = None


def isValidBST(root):
    return helper(root)

def helper(node,minValue=float("-inf"),maxValue=float("inf")):
    if not node:
        return True
    val=node.val
    if val<=minValue or val>=maxValue:
        return False
    if not helper(node.right,val,maxValue):
        return False
    if not helper(node.left,minValue,val):
        return False
    return True