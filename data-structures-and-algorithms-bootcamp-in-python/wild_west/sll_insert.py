# Singly Linked List - Insert
# Implement the following on the SinglyLinkedList class:
#
# Insert
#
# This function should insert a node at a specified index in a  SinglyLinkedList. It should return true if the index is valid, and false if the index is invalid (less than 0 or greater the length of the list).
#
#                                                                                                                                                                 Examples
#
#                                                                                                                                                                 (Note: you do not need to re-implement push, the test will be provided with it)
#
#                                                                                                                                                                 singlyLinkedList = SinglyLinkedList()
#                                                                                                                                                                 singlyLinkedList.push(5)  # Success
#                                                                                                                                                                 singlyLinkedList.push(10)  # Success
#                                                                                                                                                                 singlyLinkedList.push(15)  # Success
#                                                                                                                                                                 singlyLinkedList.push(20)  # Success
#
#
#                                                                                                                                                                 singlyLinkedList.insert(2, 12)  # True
#                                                                                                                                                                 singlyLinkedList.insert(100, 12) # False
#                                                                                                                                                                 singlyLinkedList.length         # 5
#                                                                                                                                                                 singlyLinkedList.head.val       # 5
#                                                                                                                                                                 singlyLinkedList.head.next.val   # 10
#                                                                                                                                                                 singlyLinkedList.head.next.next.val  # 12
#                                                                                                                                                                 singlyLinkedList.head.next.next.next.val # 15
#                                                                                                                                                                 singlyLinkedList.head.next.next.next.next.val # 20
#
#                                                                                                                                                                 singlyLinkedList.insert(5, 25) # True
#                                                                                                                                                                 singlyLinkedList.head.next.next.next.next.next.val # 25
#                                                                                                                                                                 singlyLinkedList.tail.val # 25
#

# Singly Linked List

class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def push(self, data):
        node = Node(data)
        if self.head == None:
            self.head = node
        else:
            self.tail.next = node
        self.tail = node
        self.length += 1
        return "Success"

    def insert(self, index, data):
        if index<0 or index>self.length:
            return False
        nn=Node(data)
        if index==0 or index==self.length:
            self.push(data)
        elif index==1:
            nn.next=self.head.next
            self.head.next=nn
            self.length+=1
        else:
            z=self.head
            ix=0
            while ix<index-1:
                z=z.next
                ix+=1
            nxn=z.next
            z.next=nn
            nn.next=nxn
            self.length+=1
        return True
