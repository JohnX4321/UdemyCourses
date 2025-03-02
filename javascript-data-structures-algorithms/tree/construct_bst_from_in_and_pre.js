/*
 * Coding Exercise: Construct Binary Tree from Pre order and In order Traversal
Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
 */


class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function bt(mp,preorder,pix,left,right) {
    if (left>right) return null;
    const rootV=preorder[pix[0]];
    pix[0]++;
    const root=new TreeNode(rootV);
    const ix=mp[rootV];
    root.left=bt(mp,preorder,pix,left,ix-1);
    root.right=bt(mp,preorder,pix,ix+1,right);
    return root;
}

var buildTree = function(preorder, inorder) {
    //Write code here
    const mp={};
    inorder.forEach((v,i) => mp[v]=i);
    const pix=[0];
    return bt(mp,preorder,pix,0,inorder.length-1);
};
