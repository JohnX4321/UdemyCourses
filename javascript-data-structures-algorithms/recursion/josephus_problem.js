var findTheWinner = function(n, k) {
    //Write code here
    return 1+recHelper(n,k);

};

var recHelper = function(n,k) {
    if (n===1) return 0;
    return (recHelper(n-1,k)+k)%n;
}

//Solution 2
var findTheWinnerIter = function(n, k) {
    //Write code here
    let res=0;
    for(let i=2;i<=n;i++)
        res=(res+k)%i;
    return res+1;

};