/*
 * Non-overlapping Intervals
Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.



Example:

Input: intervals = [[2,3],[3,4],[2,4]]

Output: 1

Need to remove [2,4]
 */

var eraseOverlapIntervals = function(intervals) {
    //write code here
    intervals.sort((a,b)=>a[0]-b[0]);
    let count=0,last=intervals[0][1];
    for (let i=1;i<intervals.length;i++) {
        if (intervals[i][0]<last) {
            count++;
            last=Math.min(last,intervals[i][1]);
        } else last=intervals[i][1];
    }
    return count;
};