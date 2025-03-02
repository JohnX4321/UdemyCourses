/*
 * Coding Exercise: Construct Binary Tree from Inorder and Post order traversal
Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.
 */


class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var buildTree = function(inorder, postorder) {
    //Write code here
    const n=inorder.length;
    const mp={};
    for (let i=0;i<n;i++)
        mp[inorder[i]]=i;
    const pix=[n-1];
    return bt(inorder,postorder,0,n-1,pix,mp);
};

function bt(inorder,postorder,inS,inE,pix,mp) {
    if (inS>inE) return null;
    const curr=postorder[pix[0]];
    const node=new TreeNode(curr);
    pix[0]--;
    if (inS===inE) return node;
    const ii=mp[curr];
    node.right=bt(inorder,postorder,ii+1,inE,pix,mp);
    node.left=bt(inorder,postorder,inS,ii-1,pix,mp);
    return node;
}
