# Singly Linked List - Push
# Implement the following on the SinglyLinkedList class:
#
# push
#
# This function should take in a value and add o node to the end of the SinglyLinkedList. It should return the SinglyLinkedList.
#
# Examples
#
# singlyLinkedList = SinglyLinkedList()
# singlyLinkedList.push(5)  # Success
# singlyLinkedList.length   # 1
# singlyLinkedList.head.val # 5
# singlyLinkedList.tail.val # 5
#
# singlyLinkedList.push(10)    # Success
# singlyLinkedList.length      # 2
# singlyLinkedList.head.val    # 5
# singlyLinkedList.head.next.val  # 10
# singlyLinkedList.tail.val    # 10


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
        nn=Node(data)
        if self.head==None:
            self.head=nn
            self.tail=nn
            self.length+=1
        else:
            self.tail.next=nn
            self.tail=nn
            self.length+=1
        return self.head