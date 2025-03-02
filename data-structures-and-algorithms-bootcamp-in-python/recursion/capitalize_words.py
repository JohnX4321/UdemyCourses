
def capitalizeWords(arr):
    res=[]
    if len(arr)==0:
        return res
    res.append(arr[0].upper())
    return res+capitalizeWords(arr[1:])