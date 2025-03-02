class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

    def __str__(self):
        return str(self.value)

class CSLinkedList:

    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def __str__(self):
        z=self.head
        res=''
        while z:
            res+=str(z.value)
            z=z.next
            if z==self.head:
                break
            res+=' -> '
        return res

    def append(self, value):
        nn=Node(value)
        if self.length==0:
            self.head=self.tail=nn
            nn.next=nn
        else:
            self.tail.next=nn
            nn.next=self.head
            self.tail=nn
        self.length+=1

    def prepend(self, value):
        nn=Node(value)
        if self.length==0:
            self.head=self.tail=nn
            nn.next=nn
        else:
            nn.next=self.head
            self.head=nn
            self.tail.next=nn
        self.length+=1
