var combinationSum3 = function(k, n) {
    //Write Code here
    let res=[];
    let t=[];
    function dfs(i,s) {
        if(s===0) {
            if (t.length===k)
                res.push(t.slice());
            return;
        }
        if (i>9 || i>s || t.length>=k)
            return;
        t.push(i);
        dfs(i+1,s-i);
        t.pop();
        dfs(i+1,s);
    }
    dfs(1,n);
    return res;
};
