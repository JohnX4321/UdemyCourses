/*
 * Coding Exercise: Number of Provinces
There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.
 */


var findCircleNum = function(isConnected) {
    //write code here
    const n=isConnected.length;
    const p=Array.from({length: n},(_,i)=>i);
    const find=(x) => {
        if (p[x]!==x) p[x]=find(p[x]);
        return p[x];
    };
    let res=n;
    for (let i=0;i<n;i++){
        for (let j=i+1;j<n;j++){
            if (isConnected[i][j]) {
                const pa=find(i),pb=find(j);
                if (pa!==pb){
                    p[pa]=pb;
                    --res;
                }
            }
        }
    }
    return res;
};
