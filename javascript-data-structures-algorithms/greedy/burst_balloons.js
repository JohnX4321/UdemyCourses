/*
 * Coding Exercise: Minimum # of arrows to burst baloons
There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter stretches between xstart and xend. You do not know the exact y-coordinates of the balloons.

Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. A balloon with xstart and xend is burst by an arrow shot at x if xstart <= x <= xend. There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.

Given the array points, return the minimum number of arrows that must be shot to burst all balloons.

Example:

Input: points = [[3,9],[7,14],[10,16],[17,20]]

Expected Output: The balloons can be burst by 2 arrows:

Shoot an arrow at x = 10, bursting the balloons [3,9], [7,14], and [10,16].

Shoot an arrow at x = 18, bursting the balloon [17,20].
 */

var findMinArrowShots = function(points) {
    //Write code here
    points.sort()
    let mx=0,last=-1*Infinity;
    for (let p of points) {
        if (last<p[0]) {
            last=p[1];
            mx++;
        }
        else
            last = Math.min(last,p[1]);
    }
    return mx;
};

