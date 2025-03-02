class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var preorderTraversal = function(root) {
    //Write code here
    if (!root) return [];
    let res=[];
    let st=[root];
    while (st.length>0) {
        let c=st.pop();
        res.push(c.val);
        if (c.right) st.push(c.right);
        if (c.left) st.push(c.left);
    }
    return res;
};
