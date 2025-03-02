/*
 * Coding Exercise: Vertical order traversal of a Binary Tree
Given the root of a binary tree, calculate the vertical order traversal of the binary tree.

For each node at position (row, col), its left and right children will be at positions (row + 1, col - 1) and (row + 1, col + 1) respectively. The root of the tree is at (0, 0).

The vertical order traversal of a binary tree is a list of top-to-bottom orderings for each column index starting from the leftmost column and ending on the rightmost column. There may be multiple nodes in the same row and same column. In such a case, sort these nodes by their values.

Return the vertical order traversal of the binary tree.
 */


class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function verticalTraversal(root) {
    //Write code here
    const m=new Map();
    let q=[[root,0]];
    while (q.length) {
        const cols=new Map(),next=[];
        for (let [node,x] of q) {
            if (!cols.has(x)) cols.set(x,[node.val]);
            else cols.get(x).push(node.val);
            if(node.left) next.push([node.left,x-1]);
            if (node.right) next.push([node.right,x+1]);
        }
        for (let [x,val] of cols) {
            if (!m.has(x)) m.set(x,[]);
            m.get(x).push(...val.sort((a,b)=>a-b));
        }
        q=next;
    }
    return [...[...m.entries()].sort((a,b)=>a[0]-b[0]).map(x=>x[1])];

}

// Example usage:
// const root = new TreeNode(3);
// root.left = new TreeNode(9);
// root.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));
// console.log(verticalTraversal(root)); // Output: [[9], [3, 15], [20], [7]]
