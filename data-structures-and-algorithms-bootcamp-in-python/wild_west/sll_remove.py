# Singly Linked List - Remove
# Implement a function on the SinglyLinkedList class which should remove a node at a specified index in a SinglyLinkedList. If the index is valid it should return the removed node otherwise it should return undefined.
#
# Example
#
# singlyLinkedList = SinglyLinkedList()
# singlyLinkedList.push(5)  # Success
# singlyLinkedList.push(10)  # Success
# singlyLinkedList.push(15)  # Success
# singlyLinkedList.push(20)  # Success
# singlyLinkedList.push(25)  # Success
# singlyLinkedList.remove(2).val # 15
# singlyLinkedList.remove(100) # None
# singlyLinkedList.length  # 4
# singlyLinkedList.head.val   # 5
# singlyLinkedList.head.next.val  # 10
# singlyLinkedList.head.next.next.val  # 20

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

    def remove(self, index):
        if index<0 or index>=self.length:
            return None
        if self.head is None:
            return None
        else:
            self.length-=1
            res=self.head
            if index==0:
                if self.head==self.tail:
                    self.head=self.tail=None
                else:
                    self.head=self.head.next
                return res
            else:
                z=self.head
                ix=0
                while ix<index-1:
                    z=z.next
                    ix+=1
                res=z.next
                z.next=res.next
                return res