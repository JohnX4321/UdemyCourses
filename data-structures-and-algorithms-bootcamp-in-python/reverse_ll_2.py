"""
Reverse Linked List
Given the head of a singly linked list, reverse the list, and return the reversed list.



Example 1:





Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:





Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []


Constraints:

The number of nodes in the list is the range [0, 5000].

-5000 <= Node.val <= 5000
"""

class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution(object):

    def reverseList(self, head):
        pn=None
        cn=head
        while cn is not None:
            nn=cn.next
            cn.next=pn
            pn=cn
            cn=nn
        return pn