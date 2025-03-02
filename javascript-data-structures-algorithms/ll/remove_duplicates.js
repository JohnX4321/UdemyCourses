/*
 * Coding Exercise: Remove Duplicates
Question :

delete duplicates - You are given the head of a Sorted Singly Linked list. Write a function that will take the given head as input, delete all nodes that have a value that is already the value of another node so that each value appears 1 time only and return the linked list, which is still to be a sorted linked list.
 */

class Node{
    constructor(value){
        this.val= value;
        this.next = null;
    }
}

function removeDupes(head){
    //write code here
    let curr=head;
    while (curr) {
        let ndv=curr.next;
        while (ndv!==null && curr.val===ndv.val)
            ndv=ndv.next;
        curr.next=ndv;
        curr=ndv;
    }
    return head;
}
