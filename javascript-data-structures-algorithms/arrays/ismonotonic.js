const checkMonotonic = function (array){
    //write code here to return either true or false
    const n = array.length;
    if (n===1) return true;
    let isInc = true, isDec = true;
    for (let i=1;i<n;i++) {
        if (!isInc && !isDec) return false;
        if (array[i]<array[i-1]) isInc = false;
        if (array[i]>array[i-1]) isDec = false;
    }
    return isDec || isInc;

}

