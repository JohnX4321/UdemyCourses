/*
 * Coding Exercise: Sum root to leaf numbers
You are given the root of a binary tree containing digits from 0 to 9 only.

Each root-to-leaf path in the tree represents a number.

For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.

Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

A leaf node is a node with no children.
 */



class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function sumNumbers(root) {
    //write code here
    function dfs(root,s) {
        if (!root) return 0;
        s=s*10+root.val;
        if (!root.left && !root.right) return s;
        return dfs(root.left,s)+dfs(root.right,s);
    }
    return dfs(root,0);

}

// Example usage:
// const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
// console.log(sumNumbers(root)); // Output: 25
