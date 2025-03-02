/*
 * Coding Exercise: Serialize and Deserialize Binary Tree
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
 */



class TreeNode {
    constructor(x) {
        this.val = x;
        this.left = null;
        this.right = null;
    }
}

var serialize = function(root) {
    //Write code here
     const res = [];

    function preorder(node) {
        if (!node) {
            res.push("None");
            return;
        }
        res.push(node.val.toString());
        preorder(node.left);
        preorder(node.right);
    }

    preorder(root);
    return res.join(",");
};

var deserialize = function(data) {
    //write code here
     const nodeValues = data.split(",");
    let i = 0;

    function buildTree() {
        if (nodeValues[i] === "None") {
            i++;
            return null;
        }
        const node = new TreeNode(parseInt(nodeValues[i]));
        i++;
        node.left = buildTree();
        node.right = buildTree();
        return node;
    }

    return buildTree();

};
