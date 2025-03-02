/*
 * Coding Exercise: Lowest Common Ancestor of a BST
Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the defenition of LCA on wikipedia:  “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
 */


class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function lowestCommonAncestor(root, p, q) {
    //write code here
    if (!root || root===p || root===q)
        return root;
    const left=lowestCommonAncestor(root.left,p,q);
    const right=lowestCommonAncestor(root.right,p,q);
    return left&&right ? root: left || right;
}

// Example usage:
// const root = new TreeNode(6);
// root.left = new TreeNode(2);
// root.right = new TreeNode(8);
// root.left.left = new TreeNode(0);
// root.left.right = new TreeNode(4);
// root.left.right.left = new TreeNode(3);
// root.left.right.right = new TreeNode(5);
// root.right.left = new TreeNode(7);
// root.right.right = new TreeNode(9);

// const p = root.left; // Node with value 2
// const q = root.right; // Node with value 8

// console.log(lowestCommonAncestor(root, p, q)); // Should print node with value 6
