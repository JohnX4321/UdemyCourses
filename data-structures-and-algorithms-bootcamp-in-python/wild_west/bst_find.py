# Binary Search Tree

class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None

    def insert(self,data):
        if(self.root==None):
            self.root=Node(data)
        else:
            self._insert(data,self.root)


    def _insert(self, data, curNode):
        if(curNode.data>data):
            if(curNode.left==None):
                curNode.left=Node(data)

            else:
                self._insert(data,curNode.left)
        else:
            if(curNode.right==None):
                curNode.right=Node(data)
            else:
                self._insert(data,curNode.right)

    def find(self, data):
        curr=self.root
        while curr:
            if curr.data==data:
                return curr
            elif curr.data>data:
                curr=curr.left
            else:
                curr=curr.right
        return None
