var combinationSum = function(candidates, target) {
    //Write code here
    let res=[];
    function helper(i,sum,currSum) {
        if(currSum>target)
            return;
        if (currSum===target) {
            res.push([...sum]);
            return;
        }
        for (let j=i;j<candidates.length;j++) {
            sum.push(candidates[j]);
            helper(j,sum,currSum+candidates[j]);
            sum.pop();
        }
    }
    helper(0,[],0);
    return res;
};
