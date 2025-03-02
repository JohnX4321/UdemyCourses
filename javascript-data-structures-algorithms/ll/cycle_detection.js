/*
 * Coding Exercise: Cycle Detection
Question:

Cycle Detection - You are given the head of a linked list. Check if there is a cycle and if yes,  return the node where the cycle begins. If there is no cycle, return null. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Do not modify the linked list.
 */

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const checkLoop = function(head){
    //write your code here
    if (!head) return null;
    if (!head.next) return null;
    let fast=head,slow=head;
    while (fast && fast.next) {
        fast=fast.next.next;
        slow=slow.next;
        if (fast===slow) break;
    }
    if (fast!==slow) return null;
    let p=head;
    while (p!==slow) {
        p=p.next;
        slow=slow.next;
    }
    return slow;
}

//For Testing
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);



one.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = six;
//make a loop
six.next =three;

let head = one;

checkLoop(head);
