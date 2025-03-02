/*
 * Coding Exercise: Design a Stack (with Linked List)
Question :Construct Stack (using Linked List)

(you can do it with either SLL or DLL. Here let's try to do it with SLL)

Implement a Stack:

1.Using an Array

2.with a Stack class using a Linked list

One should be able to add to the stack and remove from the stack following the LIFO property.



Note-

Remove - after removing , return the value of the removed node
 */


class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
//LIFO
//add at beg
//remove from the beg
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    addAtBeginning(value){
        //write your code here
        const node=new Node(value);
        if (!this.first) {
            this.first=node;
            this.last=node;
        } else {
            let z=this.first;
            this.first=node;
            this.first.next=z;
        }
        this.size++;
        return this;
    }
    removeFromBeginning(){
        //return the removed Node
        //write your code here
        if (!this.first) return null;
        let z=this.first;
        this.first=this.first.next;
        this.size--;
        if (this.size===0)
            this.last=null;
        return z;
    }
}

const stack = new Stack();
