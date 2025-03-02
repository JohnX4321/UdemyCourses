def stringifyNumbers(obj):
    no=obj
    for k in no:
        if type(no[k]) is int:
            no[k]=str(no[k])
        if type(no[k]) is dict:
            no[k]=stringifyNumbers(no[k])
    return no