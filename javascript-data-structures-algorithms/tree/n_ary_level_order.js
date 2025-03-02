/*
 * Coding Exercise: N-ary Tree Level Order Traversal
Given an n-ary tree, return the level order traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).
 */



class Node {
    constructor(val = null, children = []) {
        this.val = val;
        this.children = children;
    }
}

var levelOrder = function(root) {
    //Write code here
    const res=[];
    const dfs=(root,i) => {
        if (root===null) return;
        if (res.length<=i) res.push([]);
        const {val,children} = root;
        res[i++].push(val);
        children.forEach(n=>dfs(n,i));
    };
    dfs(root,0);
    return res;

};
