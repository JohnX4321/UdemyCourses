# STACK
class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next

class Stack:
    def __init__(self):
        self.first = None
        self.last = None
        self.size = 0

    def push(self,data):
        self.first = Node(data, self.first)

        if self.size==0:
            self.last = self.first
        self.size += 1
        return self.size

    def pop(self):
        if self.first==None:
            return self.first
        self.size-=1
        z=self.first
        self.first=z.next
        if self.size==0:
            self.last=None
        return z.data