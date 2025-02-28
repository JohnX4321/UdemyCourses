/*
 * Given an integer array nums, return the length of the longest strictly increasing
subsequence.
 */
var lengthOfLIS = function(nums) {
    //Write code here
    let n=nums.length;
    if (n===0) return 0;
    let dp=new Array(n).fill(1);
    let mx=1;
    for (let i=1;i<n;i++) {
        for (let j=0;j<i;j++) {
            if (nums[i]>nums[j] && dp[j]+1>dp[i])
                dp[i]=dp[j]+1
        }
        if (dp[i]>mx) mx=dp[i];
    }
    return mx;
};


var lengthOfLIS = function(nums) {
    //Write code here
    const n = nums.length;
    if (n===0) return 0;
    const bs = (sub,num) => {
        let left=0,right=sub.length-1;
        while (left<right) {
            let mid = Math.floor((left+right)/2);
            if (sub[mid]<num)
                left=mid+1;
            else
                right=mid;
        }
        return left;
    }
    let sub=[nums[0]];
    for (let i=1;i<n;i++) {
        let num=nums[i];
        if (num>sub[sub.length-1])
            sub.push(num);
        else {
            const ix=bs(sub,num);
            sub[ix]=num;
        }
    }
    return sub.length;
};
