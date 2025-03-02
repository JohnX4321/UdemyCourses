/*
 * Coding Exercise: Two City Scheduling
A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.

Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.


 */

var twoCitySchedCost = function(costs) {
    //Write code here
    const n =costs.length/2;
    costs.sort((a,b)=>(a[0]-a[1])-(b[0]-b[1]));
    let res=0;
    for (let i=0;i<n;i++)
        res+=costs[i][0];
    for (let i=n;i<2*n;i++)
        res+=costs[i][1];
    return res;

};