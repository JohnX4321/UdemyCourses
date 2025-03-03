#
# Zero One Knapsack - Top Down
# Given the weights and profits of N items and these items cannot be broken into the pieces. Create a function to find the maximum profit within given capacity of C using Top Down method.
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
# zoKnapsack(items, 7, 0, {}) #98


# Zero One Knapsack Problem

class Item:
    def __init__(self, profit, weight):
        self.profit = profit
        self.weight = weight

def zoKnapsack(items, capacity, currentIndex, tempDict):
    dk=str(currentIndex)+str(capacity)
    if capacity<=0 or currentIndex<0 or currentIndex>=len(items):
        return 0
    elif dk in tempDict:
        return tempDict[currentIndex]
    elif items[currentIndex].weight<=capacity:
        profit1=items[currentIndex].profit+zoKnapsack(items,capacity-items[currentIndex].weight,currentIndex+1,tempDict)
        profit2=zoKnapsack(items,capacity,currentIndex+1,tempDict)
        tempDict[dk]=max(profit1,profit2)
        return tempDict[dk]
    else:
        return 0