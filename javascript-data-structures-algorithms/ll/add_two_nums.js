/*
 * Coding Exercise: Add 2 numbers
Question :

Add 2 numbers-You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself. 0<=Node value<=9
 */


class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail=null;
        this.size =0;
    }
    addAtTail(value){
        const node = new Node(value);
        if(!this.head){
            this.head = node;
            this.tail = this.head;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
        return this;
    }
}

const add2Numbers = function(l1,l2){
    //write your code here
    let c=0;
    const res=new LinkedList();
    while (l1 || l2 || c) {
        let l1V=l1?l1.value : 0;
        let l2V=l2?l2.value:0;
        let sum=(l1V+l2V+c);
        let nr=sum%10;
        res.addAtTail(nr);
        c=Math.floor(sum/10);
        l1=l1?l1.next:null;
        l2=l2?l2.next:null;
    }
    return res;
}


//use below if you want to run and log in the console
const n1 = new LinkedList();
const n2 = new LinkedList();
//540 + 723 = 1263
n1.addAtTail(0);
n1.addAtTail(4);
n1.addAtTail(5);

n2.addAtTail(3);
n2.addAtTail(2);
n2.addAtTail(7);

add2Numbers(n1.head, n2.head);