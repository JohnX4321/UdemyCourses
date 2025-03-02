/*
 * Coding Exercise : Fractional Knapsack
Determine how to optimally fill a knapsack with a capacity of W kilograms using a list of N items, where each item is represented by a pair [profit, weight]. In the Fractional Knapsack problem, you can take fractions of items to maximize the total profit in the knapsack.(N will be greater than equal to 1 )

Example 1:

Given arr[] = [[70, 10], [90, 20], [150, 30]]

W= 25

Expected output = 145



Example 2:

Given arr[] = [[70, 10], [90, 20], [150, 30]]

W= 45

Expected output = 242.5


 */

function fractionalKnapsack(W, arr, n) {
    //Write code here
    arr.sort((a,b)=>(b[0]/b[1])-(a[0]/a[1]));
    let remW = W;
    let res=0;
    for (let i=0;i<n;i++) {
        if (remW===0) break;
        let wt=Math.min(remW,arr[i][1]);
        remW-=wt;
        res+=(arr[i][0]/arr[i][1])*wt;
    }
    return res;
}

