var subsetsWithDup = function(nums) {
    //Write Code here
    let res=[];
    nums.sort((a,b) => a-b);
    function helper(i,subset) {
        if (i===nums.length) {
            res.push([...subset]);
            return;
        }
        subset.push(nums[i]);
        helper(i+1,subset);
        subset.pop();
        //exclude current and skip all duplicates
        while (i<nums.length-1 && nums[i]===nums[i+1])
            i++;
        helper(i+1,subset);
    }
    helper(0,[]);
    return res;

};
