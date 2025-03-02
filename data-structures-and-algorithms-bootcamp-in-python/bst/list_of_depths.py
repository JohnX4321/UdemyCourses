# List of Depths
# Given a binary search tree, design an algorithm which creates a linked list of all the nodes at each depth (ie , if you have a tree with depth D, you’ll have D linked lists)
#
#                                                                                                             Example

# List of Depth
class LinkedList:
    def __init__(self, val):
        self.val = val
        self.next = None

    def add(self, val):
        if self.next == None:
            self.next = LinkedList(val)
        else:
            self.next.add(val)
    def __str__(self):
        return "({val})".format(val = self.val) + str(self.next)

class BinaryTree:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def depth(tree):
    if tree == None:
        return 0
    if tree.left == None and tree.right == None:
        return 1
    else:
        dl=1+depth(tree.left)
        dr=1+depth(tree.right)
        if dl>dr:
            return dl
        else:
            dr

def treeToLinkedList(tree, custDict = {}, d = None):
    if d==None:
        d=depth(tree)
    if custDict.get(d) == None:
        custDict[d]=LinkedList(tree.val)
    else:
        custDict[d].add(tree.val)
        if d==1:
            return custDict
    if tree.left:
        custDict=treeToLinkedList(tree.left,custDict,d-1)
    if tree.right:
        custDict=treeToLinkedList(tree.right,custDict,d-1)
    return custDict

