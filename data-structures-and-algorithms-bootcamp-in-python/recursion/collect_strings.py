def collectStrings(obj):
    res=[]
    for k in obj:
        if type(obj[k]) is str:
            res.append(obj[k])
        if type(obj[k]) is dict:
            res=res+collectStrings(obj[k])
    return res