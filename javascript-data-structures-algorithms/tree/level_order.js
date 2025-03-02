/*
 * Coding Exercise: Instance method, Level Order traversal
Question 1:Level Order traversal

Write a function that takes the root of a binary tree, and returns the level order traversal of its nodes' values. (i.e., from left to right, level by level).

1- Initially write an instance method for the Binary Search tree class to insert the values given as an array into the Binary tree (from left to right, level by level). Each value in the array which is not null is to be made a node and added to the tree. (See examples in the question video).



2- Then write the function mentioned first.
 */


class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }
    insert(array){
        //write code here
        //make sure to return this
        if (array.length===0) return;
        let i=0;
        if (!this.root) {
            if (array[0]===null) return;
            else {
                let node=new Node(array[0]);
                this.root=node;
                i++;
                if(i===array.length) return this;
            }
        }
        const queue=[this.root];
        while (queue.length) {
            let curr=queue.shift();
            if (!curr.left) {
                if (array[i]!==null) {
                    let node=new Node(array[i]);
                    curr.left=node;
                }
                i++;
                if (i===array.length) return this;
            }
            if (curr.left) queue.push(curr.left);
            if (!curr.right) {
                if (array[i]!==null) {
                    let node=new Node(array[i]);
                    curr.right=node;
                }
                i++;
                if (i===array.length) return this;
            }
            if (curr.right) queue.push(curr.right);
        }
    }
}

const levelOrderTraversal = function (root){
    if(!root) return [];
    const output =[];
    //write code here
    const queue=[root];
    while (queue.length) {
        let n=queue.length;
        let cnt=0;
        const clv=[];
        while (cnt<n) {
            const curr=queue.shift();
            clv.push(curr.value);
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
            cnt++;
        }
        output.push(clv);
    }
    return output;
}

const tree = new BinaryTree();
tree.insert([7,11,1,null,7,2,8,null,null,null,3,null,null,5,null]);
levelOrderTraversal(tree.root);
