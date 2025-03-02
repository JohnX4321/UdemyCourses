/*
 * Path Sum 2
Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.



Example



# Corrected Tree structure:
    #     5
    #    / \
    #   4   8
    #  /   / \
    # 11  13  4
    # / \    / \
    #7   2  5   1

Output = [[5, 4, 11, 2], [5, 8, 4, 5]]

 */


class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var pathSum = function(root, targetSum) {
    //Write code here
    let res=[];
    function helper(root,remSum,curr) {
        if (root===null) return;
        curr.push(root.val);
        if (remSum===root.val && root.left===null && root.right===null)
            res.push([...curr]);
        else {
            helper(root.left,remSum-root.val,curr);
            helper(root.right,remSum-root.val,curr);
        }
        curr.pop();
    }
    helper(root,targetSum,[]);
    return res;
};
