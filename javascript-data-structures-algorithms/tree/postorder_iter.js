/*
 * Post Order Traversal of Binary Tree - Iterative
Given the root of a binary tree, return the postorder traversal of its nodes' values. Write the iterative solution.
 */

class Node {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var postorderTraversal = function(root) {
    //Write code here
    let st=[root];
    let vis=[false];
    let res=[];
    while (st.length>0) {
        let curr=st.pop();
        let vt=vis.pop();
        if (curr){
            if (vt)
                res.push(curr.val);
            else {
                st.push(curr);
                vis.push(true);
                st.push(curr.right);
                vis.push(false);
                st.push(curr.left);
                vis.push(false);
            }
        }
    }
    return res;
};
