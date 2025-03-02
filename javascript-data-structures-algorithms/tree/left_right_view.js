/*
 * Coding Exercise: Left / Right view
Question :Left/Right View of binary tree

1. Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

2. Given the root of a binary tree, imagine yourself standing on the left side of it, return the values of the nodes you can see ordered from top to bottom.
 */


const rightView = function(root){
    if(!root) return [];
    const right = [];
    //write your code here
    const q=[root];
    while (q.length) {
        let n=q.length;
        let cnt=0;
        while (cnt<n) {
            cnt++;
            const curr=q.shift();
            if (cnt===n) right.push(curr.value);
            if (curr.left) q.push(curr.left);
            if (curr.right) q.push(curr.right);
        }
    }
    return right;
}

const leftView = function(root){
    if(!root) return [];
    const left = [];
    //write your code here
    const q=[root];
    while (q.length) {
        let n=q.length;
        let cnt=0;
        while (cnt<n) {
            cnt++;
            const curr=q.shift();
            if(cnt===1) left.push(curr.value);
            if (curr.left) q.push(curr.left);
            if (curr.right) q.push(curr.right);
        }
    }
    return left;
}