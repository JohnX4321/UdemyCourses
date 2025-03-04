class MinHeap:
    def __init__(self, size):
        self.customList = (size+1) * [None]
        self.heapSize = 0
        self.maxSize = size + 1

def heapify(node,ix):
    pix=ix//2
    if ix<=1:
        return
    if node.customList[ix]<node.customList[pix]:
        [node.customList[ix],node.customList[pix]]=[node.customList[pix],node.customList[ix]]
    heapify(node,pix)

def insertNode(rootNode, nodeValue):
    if rootNode.heapSize+1==rootNode.maxSize:
        return "The Binary Heap is full"
    rootNode.customList[rootNode.heapSize+1]=nodeValue
    rootNode.heapSize+=1
    heapify(rootNode,rootNode.heapSize)
    return "The value has been successfully inserted"