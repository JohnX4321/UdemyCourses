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
        temp_node = self.head
        result = ''
        while temp_node is not None:
            result += str(temp_node.value)
            temp_node = temp_node.next
            if temp_node == self.head:  # Stop condition for circular list
                break
            result += ' -> '
        return result

    def append(self, value):
        new_node = Node(value)
        if self.length == 0:
            self.head = new_node
            self.tail = new_node
            new_node.next = new_node
        else:
            self.tail.next = new_node
            new_node.next = self.head
            self.tail = new_node
        self.length += 1

    def split_list(self):
        if self.length==0:
            return None,None
        mid=(self.length+1)//2
        cnt=1
        first_list=CSLinkedList()
        second_list=CSLinkedList()
        curr=self.head
        lfl=None
        while cnt<=mid:
            first_list.append(curr.value)
            lfl=curr
            curr=curr.next
            cnt+=1
        if lfl:
            first_list.tail=lfl
            first_list.tail.next=first_list.head
        while curr!=self.head:
            second_list.append(curr.value)
            curr=curr.next
        if second_list.length>0:
            second_list.tail=self.tail
            second_list.tail.next=second_list.head

        return first_list, second_list