function powerSum(array, power = 1) {
    //write code here
    let res=0;
    array.forEach( i => {
        if(Array.isArray(i))
            res+=powerSum(i,power+1);
        else
            res+=i;
    });
    return Math.pow(res,power);
}
