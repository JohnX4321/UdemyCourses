/*
 * Coding Exercise: Design a Queue using a Linked List
Question :Construct Queue

Implement a Queue:

- with a Queue class using a Linked list

One should be able to add to the queue and remove from the queue following the FIFO property.
 */


class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
//FIFO
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size =0;
    }
    enqueue(value){
        //write your code here
        const node=new Node(value);
        if (!this.first) {
            this.first=node;
            this.last=node;
        } else {
            this.last.next=node;
            this.last=node;
        }
        this.size++;
        return this;
    }
    dequeue(){
        //write your code here
        //return the removed node
        if (!this.first) return null;
        const z=this.first;
        this.first=this.first.next;
        this.size--;
        if (this.size===0)
            this.last=null;
        return z;
    }
}
