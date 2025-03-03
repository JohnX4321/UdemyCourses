# Singly Linked List - Pop
# Implement the following on the SinglyLinkedList class:
#
# pop
#
# This function should remove a node at the end of the SinglyLinkedList. It should return the node removed.
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
#
#
# singlyLinkedList.pop().val # 10
# singlyLinkedList.tail.val  # 5
# singlyLinkedList.length    # 1
# singlyLinkedList.pop().val # 5
# singlyLinkedList.length    # 0
# singlyLinkedList.pop()     # Undefined

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

    def pop(self):
        if self.length==0:
            return "Undefined"
        z=None
        if self.length==1:
            z=self.head
            self.head=None
            self.tail=None
        else:
            c=self.head
            while c.next!=self.tail:
                c=c.next
            z=c.next
            c.next=None
            self.tail=c
        self.length-=1
        return z
