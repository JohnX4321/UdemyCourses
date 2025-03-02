"""
Route Between Nodes
Given a directed graph and two nodes (S and E), design an algorithm to find out whether there is a route from S to E.

Examples

customDict = { "a" : ["c","d", "b"],
"b" : ["j"],
"c" : ["g"],
"d" : [],
"e" : ["f", "a"],
"f" : ["i"],
"g" : ["d", "h"],
"h" : [],
"i" : [],
"j" : []
}

g = Graph(customDict)
g.checkRoute("a", "j") #True
"""


class Graph:
    def __init__(self, gdict=None):
        if gdict is None:
            gdict = {}
        self.gdict = gdict

    def addEdge(self, vertex, edge):
        self.gdict[vertex].append(edge)

    def checkRoute(self, startNode, endNode):
        vis=[startNode]
        q=[startNode]
        path=False
        while q:
            dv=q.pop(0)
            for av in self.gdict[dv]:
                if av not in vis:
                    if av==endNode:
                        path=True
                        break
                    else:
                        vis.append(av)
                        q.append(av)
        return path