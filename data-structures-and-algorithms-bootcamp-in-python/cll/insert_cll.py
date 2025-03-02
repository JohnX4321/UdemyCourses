class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class CircularLinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            self.head.next = new_node
        else:
            temp = self.head
            while temp.next != self.head:
                temp = temp.next
            temp.next = new_node
            new_node.next = self.head

    def prepend(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            new_node.next = new_node
        else:
            new_node.next = self.head
            temp = self.head
            while temp.next != self.head:
                temp = temp.next
            temp.next = new_node
            self.head = new_node


    def insert_into_sorted(self, data):
        nn=Node(data)
        if not self.head:
            self.head=nn
            nn.next=nn
        elif data<=self.head.data:
            self.prepend(data)
        else:
            z=self.head
            while z.next!=self.head and z.next.data<data:
                z=z.next
            nn.next=z.next
            z.next=nn