var combine = function(n, k) {
    //Write Code here
    let res=[];
    function helper(i,subset) {
        if (subset.length===k) {
            res.push([...subset]);
            return;
        }
        for (let j=i;j<=n;j++) {
            subset.push(j);
            helper(j+1,subset);
            subset.pop();
        }
    }
    helper(1,[]);
    return res;
};
