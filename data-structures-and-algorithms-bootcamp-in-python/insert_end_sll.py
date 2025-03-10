
"""
Insertion at the End of a Singly Linked List
Write a method to insert a new element at the end of a singly linked list. The logic should cover edge cases such as empty linked list or linked list with some elements in it.

"""


class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def append(self, value):
        nn=Node(value)
        if not self.head:
            self.head=nn
            self.tail=self.head
        else:
            self.tail.next=nn
            self.tail=nn
        self.length+=1
