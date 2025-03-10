class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:

    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def __str__(self):
        temp_node = self.head
        result = ''
        while temp_node is not None:
            result += str(temp_node.value)
            if temp_node.next is not None:
                result += ' -> '
            temp_node = temp_node.next
        return result

    def append(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node
        self.length += 1

    def remove(self,index):
        if index<0 or index>=self.length:
            return None
        elif index==0:
            pn=self.head
            if self.length==1:
                self.head=None
                self.tail=None
            else:
                self.head=self.head.next
            pn.next=None
            self.length-=1
            return pn
        else:
            z=self.head
            for _ in range(index-1):
                z=z.next
            pn=z.next
            if pn.next is None:
                self.tail=z
            z.next=z.next.next
            pn.next=None
            self.length-=1
            return pn
