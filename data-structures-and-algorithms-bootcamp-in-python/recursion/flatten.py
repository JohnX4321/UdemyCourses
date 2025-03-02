def flatten(arr):
    res=[]
    for c in arr:
        if type(c) is list:
            res.extend(flatten(c))
        else:
            res.append(c)
    return res