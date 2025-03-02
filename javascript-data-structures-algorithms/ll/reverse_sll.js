/*
 * Coding Exercise: Reverse SLL
Question :

Reverse SLL- You are given the head of a Singly Linked list. Write a function that will take the given head as input, reverse the Linked List and return the new head of the reversed Linked List.
 */


class Node{
    constructor(value){
        this.value = value;
        this.next =null;
    }
}

function reverseLinkedList(head){
    //write your code here
    let prev=null,curr=head;
    while (curr) {
        let next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
    }
    return prev;
}
