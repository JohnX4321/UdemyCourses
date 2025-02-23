function sortedSquarredArray(array){
    //write code here.make sure to return desired array
    const n = array.length;
    let res=new Array(n).fill(0);
    let start = 0,end = n-1;
    for (let i = n-1;i>-1;i--) {
        if (Math.abs(array[start]) >= Math.abs(array[end])) {
            res[i] = array[start] * array[start];
            start++;
        } else {
            res[i] = array[end] * array[end];
            end--;
        }
    }
    return res;
}