def capitalizeFirst(arr):
    res=[]
    if len(arr)==0:
        return res
    res.append(arr[0][0].upper()+arr[0][1:])
    return res+capitalizeFirst(arr[1:])