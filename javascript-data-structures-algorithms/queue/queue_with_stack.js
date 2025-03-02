/*
 * Coding Exercise : Queue with Stack
Question :Implement Queue with Stack

Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

push(val) Pushes element val to the back of the queue.

pop() Removes the element from the front of the queue and returns it.

peek() Returns the element at the front of the queue.

empty() Returns true if the queue is empty, false otherwise.



Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid. Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations. Follow-up: Implement the queue such that each operation is amortized O(1) time complexity. In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.
 */


class MyQueue{
    constructor(){
        this.inStack = [];
        this.outStack = [];
    }
    push(val){
        //write your code here
        this.inStack.push(val);
    }
    pop(){
        //write your code here
        if (!this.outStack.length) {
            while (this.inStack.length)
                this.outStack.push(this.inStack.pop());
        }
        return this.outStack.pop();
    }
    peek(){
        //write your code here
        if (!this.outStack.length){
            while (this.inStack.length)
                this.outStack.push(this.inStack.pop());
        }
        return this.outStack[this.outStack.length-1];
    }
    empty(){
        //write your code here
        let isL=this.inStack/length;
        let outL=this.outStack.length
        return !isL && !outL;
    }
}

