"""
Insertion at the Beginning of a Singly Linked List
Write a function to insert a new element at the beginning of a singly linked list. LinkedList and Node class are already provided.

Note: Function name must be prepend


"""


class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.length = 0

    # Implement Here
    def prepend(self, value):
        nn=Node(value)
        if self.head is None:
            self.head = nn
        else:
            nn.next=self.head
            self.head=nn
        self.length+=1