/*
 * Merge Intervals
Merge Intervals

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example:

Input: intervals = [[2,5],[3,6],[9,11],[20,21]]

Output: [[2,6],[9,11],[20,21]]



Input: intervals = [[1,3],[3,9],[10,11]]

Output: [[1,9],[10,11]]
 */

function merge(intervals) {
    //write code here
    intervals.sort((a,b)=>a[0]-b[0]);
    const res=[intervals[0]];
    for (let i=1;i<intervals.length;i++) {
        const cs=intervals[i][0],ce=intervals[i][1],le=res[res.length-1][1];
        if (cs<=le)
            res[res.length-1][1]=Math.max(le,ce);
        else
            res.push([cs,ce]);
    }
    return res;
}
