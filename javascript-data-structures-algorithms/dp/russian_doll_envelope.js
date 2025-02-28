/*
 * Coding Exercise: Russian Doll Envelopes
You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the height of an envelope.

One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's width and height.

Return the maximum number of envelopes you can Russian doll (i.e., put one inside the other).

Note: You cannot rotate an envelope.

Example :

Input: envelopes = [[6,5],[7,5],[7,8],[3,4]]
Output: 3
Explanation: The maximum number of envelopes you can Russian doll is 3 ([3,4] => [6,5] => [7,8]).
 */

var maxEnvelopes = function(envelopes) {
    //Write code here
    envelopes.sort((a,b) => a[0]===b[0]?b[1]-a[1]:a[0]-b[0]);
    const n=envelopes.length;
    const sub=[envelopes[0][1]];
    function bs(sub,num) {
        let left=0,right=sub.length;
        while (left<right) {
            let mid=Math.floor((left+right)/2);
            if (num>sub[mid])
                left=mid+1
            else
                right=mid;
        }
        return left;
    }
    for (let i=1;i<n;i++) {
        const num=envelopes[i][1];
        if (num>sub[sub.length-1])
            sub.push(num);
        else {
            const x=bs(sub,num);
            sub[x]=num;
        }
    }
    return sub.length;
};
