# In-order Successor in BST - LeetCode 285
# Write an algorithm to find the next node (i.e in-order successor) of given node in a binary search tree. You may assume that each node has a link to its parent.

# Validate BST

class Node:
    def __init__(self, key):
        self.data = key
        self.left = None
        self.right = None

def insert(node, data):
    if node is None:
        return Node(data)
    else:
        if data <= node.data:
            temp = insert(node.left, data)
            node.left = temp
            temp.parent = node
        else:
            temp = insert(node.right, data)
            node.right = temp
            temp.parent = node
        return node

def minValue(node):
    curr=node
    while curr:
        if curr.left is None:
            break
        curr=curr.left
    return curr

def inOrderSuccessor(root, n):
    if n.right:
        return minValue(n.right)
    p=n.parent
    while p:
        if n!=p.right:
            break
        n=p
        p=p.parent
    return p