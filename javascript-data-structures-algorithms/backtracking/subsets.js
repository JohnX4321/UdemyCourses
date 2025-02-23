var subsets = function(nums) {
    //Write code here
    let res=[];
    function helper(i,subset) {
        if (i===nums.length) {
            res.push([...subset]); //copy of all elements
            return;
        }
        //without current
        helper(i+1,subset);
        subset.push(nums[i]);
        helper(i+1,subset);
        //backtrack
        subset.pop();
    }
    helper(0,[]);
    return res;

};
