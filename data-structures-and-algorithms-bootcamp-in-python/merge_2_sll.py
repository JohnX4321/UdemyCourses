# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution(object):
    def mergeTwoLists(self, l1, l2):
        """
:type list1: Optional[ListNode]
:type list2: Optional[ListNode]
:rtype: Optional[ListNode]
        """
        ph=ListNode(-1)
        prev=ph
        while l1 and l2:
            if l1.val<=l2.val:
                prev.next=l1
                l1=l1.next
            else:
                prev.next=l2
                l2=l2.next
            prev=prev.next
        prev.next = l1 if l1 is not None else l2
        return ph.next