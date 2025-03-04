class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None

    def insert(self,data):
        if self.root==None:
            self.root=Node(data)
        else:
            self._insert(data,self.root)

    def _insert(self,data,curr):
        if curr.data>data:
            if curr.left==None:
                curr.left=Node(data)
            else:
                self._insert(data,curr.left)
        else:
            if curr.right==None:
                curr.right=Node(data)
            else:
                self._insert(data,curr.right)