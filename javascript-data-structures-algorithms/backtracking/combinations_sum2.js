var combinationSum2 = function(candidates, target) {
    //Write code here
    let res=[];
    candidates.sort((a,b)=>a-b);
    function helper(i,sum,currSum) {
        if (currSum===target) {
            res.push([...sum]);
            return;
        }
        if (currSum>target || i>candidates.length-1)
            return;
        let hash = {};
        for (let j=i;j<candidates.length;j++) {
            if (!hash[candidates[j]]) {
                hash[candidates[j]]=true;
                sum.push(candidates[j]);
                helper(j+1,sum,currSum+candidates[j]);
                sum.pop();
            }
        }
    }
    helper(0,[],0);
    return res;

};
