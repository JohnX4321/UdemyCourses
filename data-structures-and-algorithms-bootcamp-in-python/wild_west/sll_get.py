# Singly Linked List - Get
# Implement the following on the SinglyLinkedList class:
#
# get
#
# This function should find a node at a specified index in a  SinglyLinkedList. It should return the found node.
#
# Examples
#
# singlyLinkedList = SinglyLinkedList()
# singlyLinkedList.push(5)  # Success
# singlyLinkedList.push(10)  # Success
# singlyLinkedList.push(15)  # Success
# singlyLinkedList.push(20)  # Success
#
#
# singlyLinkedList.get(0).val    # 5
# singlyLinkedList.get(1).val    # 10
# singlyLinkedList.get(2).val    # 15
# singlyLinkedList.get(3).val    # 20
# singlyLinkedList.get(4).val    # None

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

    def get(self, index):
        if index<0 or index>=self.length:
            return None
        c=self.head
        for i in range(index):
            c=c.next
        return c