# Singly Linked List - Rotate
# Implement the following on the SinglyLinkedList class:
#
# Rotate
#
# This function should rotate all the nodes in the list by some number passed in. For instance, if your list looks like 1 -> 2 -> 3 -> 4 -> 5 and you rotate by 2, the list should be modified to 3 -> 4 -> 5 -> 1 -> 2. The number passed in  to rotate can be any integer.
#
# Time Complexity : O(N), where N is the length of the list.
#
# Space Complexity : O(1)
#
# Examples
#
# (Note: you do not need to re-implement push, the test will be provided with it)
#
# singlyLinkedList = SinglyLinkedList()
# singlyLinkedList.push(5)  # Success
# singlyLinkedList.push(10)  # Success
# singlyLinkedList.push(15)  # Success
# singlyLinkedList.push(20)  # Success
# singlyLinkedList.push(25)  # Success
#
# singlyLinkedList.rotate(3)
#
# singlyLinkedList.head.val  # 20
# singlyLinkedList.head.next.val   # 25
# singlyLinkedList.head.next.next.val  # 5
# singlyLinkedList.head.next.next.next.val # 10
# singlyLinkedList.head.next.next.next.next.val # 15
# singlyLinkedList.tail.val # 15
# singlyLinkedList.tail.next # None
#
#
# singlyLinkedList = SinglyLinkedList()
# singlyLinkedList.push(5)  # Success
# singlyLinkedList.push(10)  # Success
# singlyLinkedList.push(15)  # Success
# singlyLinkedList.push(20)  # Success
# singlyLinkedList.push(25)  # Success
#
# singlyLinkedList.rotate(-1)
#
# singlyLinkedList.head.val  # 25
# singlyLinkedList.head.next.val   # 5
# singlyLinkedList.head.next.next.val  # 10
# singlyLinkedList.head.next.next.next.val # 15
# singlyLinkedList.head.next.next.next.next.val # 20
# singlyLinkedList.tail.val # 20
# singlyLinkedList.tail.next # None

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

    def rotate(self, number):
        index=(number+self.length) if number<0 else number
        if index<0 or index>=self.length:
            return Node
        if index==0:
            return "No Rotation"
        prev=self.head
        for i in range(index-1):
            prev=prev.next
        if prev==None:
            return "No Rotation"
        self.tail.next=self.head
        self.head=prev.next
        self.tail=prev
        prev.next=None
        return "Success"