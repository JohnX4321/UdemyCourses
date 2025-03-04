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

def minValueNode(root):
    curr=root
    while curr.leftChild:
        curr=curr.leftChild
    return  curr

def removeNode(rootNode, nodeValue):
    if rootNode is None:
        return rootNode
    if nodeValue<rootNode.data:
        rootNode.leftChild=removeNode(rootNode.leftChild,nodeValue)
    elif nodeValue>rootNode.data:
        rootNode.rightChild=removeNode(rootNode.rightChild,nodeValue)
    else:
        if rootNode.leftChild is None:
            z=rootNode.rightChild
            rootNode=Node
            return z
        if rootNode.leftChild is None:
            z=rootNode.leftChild
            rootNode=None
            return z
        z=minValueNode(rootNode.right)
        rootNode.data=z.data
        rootNode.rightChild=removeNode(rootNode.rightChild,z.data)
    return rootNode