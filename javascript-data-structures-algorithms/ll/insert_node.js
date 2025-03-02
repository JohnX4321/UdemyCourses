/*
 * Coding Exercise: Insert Node
Question :DLL remove insert

Create a Doubly Linked List class. Write Instance Methods for this class to be able to

Done in Prev Question -

1.remove a node when the node to be removed is given as Input.

Do as part of this exercise -

2. insert a node before a particular node(both the node to be inserted and the node before which the insertion is to happen will be given as input). If the node to be inserted is

-part of the linked list then shift its place to the desired location

-a new node, then insert the new node at the place desired.
 */


class Node{
    constructor(value){
        this.val = value;
        this.next = null;
        this.prev = null;
    }
}
function linkNodes(node1,node2){
    node1.next = node2;
    node2.prev = node1;
}
class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    remove(node){
        if(this.head===node) this.head=node.next;
        if(this.tail===node) this.tail = node.prev;

        if(node.prev)node.prev.next = node.next;
        if(node.next)node.next.prev = node.prev;

        node.next = null;
        node.prev=null;
    }
    insertB(nodePosition,nodeInsert){
        //write your code here
        if (this.head===nodeInsert && this.tail===nodeInsert)
            return;
        this.remove(nodeInsert);
        nodeInsert.prev=nodePosition.prev;
        nodeInsert.next=nodePosition;
        if (nodePosition===this.head)
            this.head=nodeInsert;
        else
            nodePosition.prev.next=nodeInsert;
        nodePosition.prev=nodeInsert;
    }
}

//For you to test on your own
//null - 1 - 2 - 3 - 4 - 5 - null
//null - 1 <-> 3 <-> 2 - 4 - 5 - null


const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const seven = new Node(7);

const linkedListDoubly = new DoublyLinkedList();
linkNodes(one,two);
linkNodes(two,three);
linkNodes(three,four);
linkNodes(four,five);
linkedListDoubly.head = one;
linkedListDoubly.tail = five;

//linkedListDoubly.remove(five);
//linkedListDoubly.insertB(two,three);
//null - 1 - 3 - 2 -  4 - 5 - null
linkedListDoubly.insertB(three,seven);
//null - 1 - 2 - 7 - 3 - 4 - 5 - null




