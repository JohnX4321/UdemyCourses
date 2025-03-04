def pivot (arr, comparator=None, start=0):
    if callable(comparator)==False:
        def comparator(a,b):
            if a<b:
                return -1
            if a>b:
                return 1
            if a==b:
                return 0
    pix=start
    for i in range(start+1,len(arr)):
        if comparator(arr[start],arr[i])>0:
            pix+=1
            [arr[i],arr[pix]]=[arr[pix],arr[i]]
    if pix!=start:
        [arr[pix],arr[start]]=[arr[start],arr[pix]]
    return pix

def quickSort(arr, comparator=None, start = 0, end=0):
    if start<end:
        pix=pivot(arr,comparator,start)
        quickSort(arr,comparator,start,pix-1)
        quickSort(arr,comparator,pix+1,end)
    return arr