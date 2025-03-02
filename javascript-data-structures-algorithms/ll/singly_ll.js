/*
 * Coding Exercise: Design a Singly Linked List
Question :

Construct Singly Linked List - Design a Singly linked list class that has a head and tail. Every node is to have two attributes: value:  the value of the current node, and next: a pointer to the next node. The linked list is to be 0-indexed. The class should support the following:

SinglyLinkedList() Initializes the SinglyLinkedList object.

get(index) Get the node at the index passed. If the index is invalid, return -1.

addAtHead(value)- Add a node of given value before the first element of the linked list. Return the SLL

addAtTail(value) -  Add a node of given value at the last element of the linked list. Return the SLL

addAtIndex(index, value) Add a node of given value before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, don’t insert the node(return a message 'invalid index' ). Return SLL once done.

deleteAtIndex(index) Delete the indexth node in the linked list, if the index is valid, else nothing happens.Return deleted node
 */


class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size =0;
    }
    get(index){
        //write code here
        if (index<0 || index>=this.size) return -1;
        let cnt=0;
        let curr=this.head;
        while (cnt!==index) {
            curr=curr.next;
            cnt++;
        }
        return curr;
    }
    addAtHead(value){
        //write code here
        const node=new Node(value);
        if (!this.head) {
            this.head=node;
            this.tail=node;
        } else {
            node.next=this.head;
            this.head=node;
        }
        this.size++;
        return this;
    }
    addAtTail(value){
        //write code here
        const node=new Node(value);
        if (!this.head) {
            this.head=node;
            this.tail=node;
        } else {
            this.tail.next=node;
            this.tail=node;
        }
        this.size++;
        return this;
    }
    addAtIndex(index,value){
        //write code here
        if (index<0 || index>this.size) return 'invalid index';
        if (index===this.size) return this.addAtTail(value);
        if (index===0) return this.addAtHead(value);
        const node=new Node(value);
        let prev=this.get(index-1);
        let z=prev.next;
        prev.next=node;
        node.next=z;
        this.size++;
        return this;
    }
    deleteAtIndex(index){
        //write code here
        if (index<0 || index>=this.size) return 'invalid index';
        if (index===0) {
            let z=this.head;
            this.head=z.next;
            this.size--;
            if (this.size===0) this.tail=null;
            return z;
        }
        if (index===this.size-1) {
            let oldTail=this.tail;
            let newTail=this.get(index-1);
            this.tail=newTail;
            newTail.next=null;
            this.size--;
            return oldTail;
        }
        let prev=this.get(index-1);
        let deletedNode=prev.next;
        prev.next=deletedNode.next;
        this.size--;
        return deletedNode;
    }
}


