"""
Sum and Product
Write a function that calculates the sum and product of all elements in a tuple of numbers.

Example

input_tuple = (1, 2, 3, 4)
sum_result, product_result = sum_product(input_tuple)
print(sum_result, product_result)  # Expected output: 10, 24
"""


def sum_product(input_tuple):
    prod=1
    sum=0
    for i in range(len(input_tuple)):
        prod*=input_tuple[i]
        sum+=input_tuple[i]
    return [sum,prod]
