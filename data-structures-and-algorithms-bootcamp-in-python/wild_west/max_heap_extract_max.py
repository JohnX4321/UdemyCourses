class MaxHeap:
    def __init__(self, size):
        self.values = (size+1) * [None]
        self.heapSize = 0
        self.maxSize = size + 1

    def insertNode(rootNode, nodeValue):
        if rootNode.heapSize + 1 == rootNode.maxSize:
            return "The Binary Heap is full"
        rootNode.values[rootNode.heapSize+1] = nodeValue
        rootNode.heapSize += 1
        heapifyTreeInsert(rootNode, rootNode.heapSize)

        return "The value has been successfully inserted"

def heapifyTreeInsert(rootNode, index):
    parentIndex = int(index/2)
    if index <= 1:
        return
    if rootNode.values[index] > rootNode.values[parentIndex]:
        temp = rootNode.values[index]
        rootNode.values[index] = rootNode.values[parentIndex]
        rootNode.values[parentIndex] = temp
    heapifyTreeInsert(rootNode, parentIndex)

def insertNode(rootNode, nodeValue):
    if rootNode.heapSize + 1 == rootNode.maxSize:
        return "The Binary Heap is full"
    rootNode.values[rootNode.heapSize+1] = nodeValue
    rootNode.heapSize += 1
    heapifyTreeInsert(rootNode, rootNode.heapSize)

    return "The value has been successfully inserted"


def extractMax(root):
    if root.heapSize==0:
        return
    else:
        en=root.values[1]
        root.values[1]=root.values[root.heapSize]
        root.values[root.heapSize]=None
        root.heapSize-=1
        heapify(root,1)
        return en

def heaify(node,ix):
    lix=ix*2
    rix=ix*2+1
    swapChild=0
    # if there is no child of this node then return
    if node.heapSize<lix:
        return
    # if there is only left child then we check with rootNode and swap
    elif node.heapSize==lix:
        if node.values[ix]<node.values[lix]:
            [node.values[ix],node.values[lix]]=[node.values[lix],node.values[ix]]
        return
    #  if both children there we find out smallest
    else:
        #  if parent is greater than smalllest child then swap
        if node.values[lix]>node.values[rix]:
            swapChild=lix
        else:
            swapChild=rix
            [node.values[ix],node.values[swapChild]]=[node.values[swapChild],node.values[ix]]
    heaify(node,swapChild)


