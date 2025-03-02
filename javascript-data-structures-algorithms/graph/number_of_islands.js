/*
 * Coding Exercise: Number of Islands
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 */


var numIslands = function(grid) {
    //Write code here
    const m=grid.length;
    if (m===0) return 0;
    const n=grid[0].length;

    let p=[];
    for (let i=0;i<m*n;i++)
        p.push(i);
    function find(x) {
        if (p[x]!==x) p[x]=find(p[x]);
        return p[x];
    }
    const dirs=[1,0,1];
    for (let i=0;i<m;i++){
        for (let j=0;j<n;j++) {
            if (grid[i][j]==='1') {
                for (let k=0;k<2;k++) {
                    const x=i+dirs[k],y=j+dirs[k+1];
                    if (x<m && y<n &&grid[x][y]==='1')
                        p[find(i*n+j)]=find(x*n+y);
                }
            }
        }
    }
    let res=0;
    for (let i=0;i<m;i++) {
        for (let j=0;j<n;j++) {
            if (grid[i][j]==='1' && i*n+j===find(i*n+j))
                res++;
        }
    }
    return res;

};
