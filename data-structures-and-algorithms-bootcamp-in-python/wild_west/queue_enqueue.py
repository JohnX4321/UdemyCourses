# Queue

class Node:
    def __init__(self, val, next = None):
        self.val = val
        self.next = next

class Queue:
    def __init__(self):
        self.first = None
        self.last = None
        self.size = 0

    def enqueue(self, data):
        nn=Node(data)
        if self.first==None:
            self.first=nn
        else:
            self.last.next=nn
        self.last=nn
        self.size+=1
        return self.size