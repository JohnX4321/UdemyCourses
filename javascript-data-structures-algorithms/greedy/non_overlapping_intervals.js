/*
 * Coding Exercise: Non overlapping Intervals
Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Example:

[[1, 4], [2, 5], [5, 6], [3, 4]]

Output: In this example, removing [2, 5] and [3, 4] is sufficient. Thus, the answer is 2.
 */

var eraseOverlapIntervals = function(intervals) {
    //Write code here
    intervals.sort((a,b)=>a[1]-b[1]);
    if (intervals.length===0) return 0;
    let end=intervals[0][1];
    let res=0;
    for (let i=1;i<intervals.length;i++) {
        if (intervals[i][0]<end)
            res++;
        else
            end=intervals[i][1];
    }
    return res;
};
