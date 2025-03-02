/*
 * Coding Exercise: Find if path exists in Graph
There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

You want to determine if there is a valid path that exists from vertex source to vertex destination.

Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.
 */



var validPath = function(n, edges, source, destination) {
    //Write code here
    const g=Array.from({length: n},()=>[]);
    for (const [u,v] of edges) {
        g[u].push(v);
        g[v].push(u);
    }
    const vis=new Set([source]);
    const q=[source];
    while (q.length) {
        const i=q.pop();
        if (i===destination)
            return true;
        for (const j of g[i]) {
            if (!vis.has(j)) {
                vis.add(j);
                q.push(j);
            }
        }
    }
    return false;
};
