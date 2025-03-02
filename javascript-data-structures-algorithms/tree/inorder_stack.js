/*
 * Inorder Traversal with stack
Given the root of a binary tree, return the inorder traversal of its nodes' values. Write the Iterative Solution.
 */


class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var inorderTraversal = function(root) {
    //Write code here
    if (!root) return [];
    let res=[];
    let st=[];
    let c=root;
    while (c || st.length>0) {
        while (c) {
            st.push(c);
            c=c.left;
        }
        c=st.pop();
        res.push(c.val);
        c=c.right;
    }
    return res;

};
