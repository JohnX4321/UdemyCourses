/*
 * Coding Exercise: Unique BST 2
Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.
 */


class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function generateTrees(n) {
    //write code here
    if(n===0) return 0;
    const dfs=(i,j) => {
        if (i>j) return [null];
        const res=[];
        for (let v=i;v<=j;v++) {
            const left=dfs(i,v-1);
            const right=dfs(v+1,j);
            for (const l of left)
                for (const r of right)
                    res.push(new TreeNode(v,l,r));
        }
        return res;
    }
    return dfs(1,n);

}

// Example usage:
// const trees = generateTrees(3);
// console.log(trees);
