/*
 * Coding Exercise : Traverse - BFS
Question :Traverse BST

Write a 4 instance methods for a Binary Search Tree class to traverse the BST.

1. Method 1 : traverse the tree breadth first and return an array that contains all the values of the BST.


 */


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    breadthFirst() {
        //write code here
        if (this.root===null) return [];
        let res=[];
        let n=this.root;
        let q=[n]
        while (q.length>0) {
            n=q.shift();
            res.push(n.value);
            if (n.left) q.push(n.left);
            if (n.right) q.push(n.right);
        }
        return res;

    }
}

// Example usage:
// const bst = new BinarySearchTree();
// bst.root = new Node(1);
// bst.root.left = new Node(2);
// bst.root.right = new Node(3);
// console.log(bst.breadthFirst()); // [1, 2, 3]
