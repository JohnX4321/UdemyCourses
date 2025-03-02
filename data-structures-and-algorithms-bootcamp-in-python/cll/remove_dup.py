from linkedlist import LinkedList

def remove_duplicates(ll):
    if ll.head is None:
        return
    cn=ll.head
    pn=None
    while cn:
        runner=cn
        while runner.next:
            if runner.next.value==cn.value:
                runner.next=runner.next.next
            else:
                runner=runner.next
        pn=cn
        cn=cn.next
    ll.tail=pn
    return ll.head