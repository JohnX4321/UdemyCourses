/*
 *
Coding Exercise: Level Order Traversal 2
Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).
 */


class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var levelOrderBottom = function(root) {
    //Write code here
    let res=[];
    if (!root) return res;
    const q=[root];
    while (q.length) {
        const t=[];
        const qq=[];
        for (const {val,left,right} of q) {
            t.push(val);
            left && qq.push(left);
            right && qq.push(right);
        }
        res.push(t);
        q.splice(0,q.length,...qq);
    }
    return res.reverse();
};
