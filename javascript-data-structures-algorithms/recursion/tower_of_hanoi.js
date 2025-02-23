function toh(N, fromm, to, aux) {
    //Write code here
    // sample print statement below
    //console.log("move disk " + 1 + " from rod " + 1 + " to rod " + 2);
    //in the above statement consider we are moving disk 1 from rod 1 to rod 2
    //remember to return number of moves as well
    if (N===0) return 0;
    return 1+toh(N-1,fromm,aux,to)+toh(N-1,aux,to,fromm);

}
