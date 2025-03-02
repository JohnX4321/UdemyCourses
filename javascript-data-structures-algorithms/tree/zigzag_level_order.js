/*
 *
 * Coding Exercise: Binary Tree zig zag level order traversal
Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).
 */


class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var zigzagLevelOrder = function(root) {
    //Write code here
    const res=[];
    if (!root) return res;
    const q=[root];
    let left=1;
    while (q.length) {
        const t=[];
        const qq=[];
        for (const {val,left,right} of q) {
            t.push(val);
            left && qq.push(left);
            right && qq.push(right);
        }
        res.push(left?t:t.reverse());
        q.splice(0,q.length,...qq);
        left^=1;
    }
    return res;

};
