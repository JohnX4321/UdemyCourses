# Zero One Knapsack - Bottom Up
# Given the weights and profits of N items and these items cannot be broken into the pieces. Create a function to find the maximum profit within given capacity of C using Bottom Up method.
#
# Example
#
# Input:
#
# profits = [ 31, 26, 72, 17 ]
#
# weights = [ 3, 1, 5, 2 ]
#
# capacity = 7
#
# zoKnapsackBU(profits, weights, capacity) #98

def zoKnapsackBU(profits, weights, capacity):
    if capacity<=0 or len(profits)==0 or len(weights)!=len(profits):
        return 0
    numRows=len(profits)+1
    dp=[[None for i in range(capacity+2)] for j in range(numRows)]
    for i in range(numRows):
        dp[i][0]=0
    for i in range(capacity+1):
        dp[numRows-1][i]=0
    for r in range(numRows-2,-1,-1):
        for c in range(1,capacity+1):
            profit1,profit2=0,0
            if weights[r]<=c:
                profit1=profits[r]+dp[r+1][c-weights[r]]
            profit2=dp[r+1][c]
            dp[r][c]=max(profit1,profit2)
    return dp[0][capacity]