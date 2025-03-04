class Node:
    def __init__(self, data):
        self.data = data
        self.leftChild = None
        self.rightChild = None

class BST:
    def __init__(self):
        self.root = Node(None)

def insertNode(rootNode, nodeValue):
    if rootNode.data == None:
        rootNode.data = nodeValue
    elif nodeValue <= rootNode.data:
        if rootNode.leftChild is None:
            rootNode.leftChild = Node(nodeValue)
        else:
            insertNode(rootNode.leftChild, nodeValue)
    else:
        if rootNode.rightChild is None:
            rootNode.rightChild = Node(nodeValue)
        else:
            insertNode(rootNode.rightChild, nodeValue)
    return "The node has been successfully inserted"

def isBalanced(rootNode):
    if rootNode==None:
        return True
    return abs(getHeight(rootNode.leftChild)-getHeight(rootNode.rightChild))<=1

def getHeight(root):
    if root==None:
        return 0
    return 1+max(getHeight(root.leftChild,root.rightChild))