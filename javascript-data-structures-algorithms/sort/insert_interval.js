/*
 * Insert Interval
Insert Interval

You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval. Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary). Return intervals after the insertion. Note that you don't need to modify intervals in-place. You can make a new array and return it. Given start values are >=0.



Example:

Input: intervals = [[5,9],[11,15]],

newInterval = [6,10]

Output: [[5,10],[11,15]]



Input: intervals = [[2,4],[5,7],[9,11],[13,15],[17,19]],

newInterval = [6,13]

Output: [[2,4],[5,15],[17,19]]
 */

function insert(intervals, newInterval) {
    //write code here
    let res=[];
    for (let i=0;i<intervals.length;i++) {
        if (newInterval[1]<intervals[i][0]){
            res.push(newInterval);
            return res.concat(intervals.slice(i));
        } else if (newInterval[0]>intervals[i][1])
            res.push(intervals[i])
        else {
            newInterval[0]=Math.min(newInterval[0],intervals[i][0]);
            newInterval[1]=Math.max(newInterval[1],intervals[i][1]);
        }
    }
    res.push(newInterval);
    return res;

}
