# Inefficient Prime Number Check

This code implements a function to check if a number is prime. However, the algorithm used is inefficient for larger numbers.  The `for` loop iterates unnecessarily to `number -1`.  A more efficient approach involves checking divisibility only up to the square root of the number. 

## Bug Description
The current implementation iterates through all numbers from 2 up to `number - 1` to check for divisibility. This is redundant because if a number has a divisor greater than its square root, it must also have a divisor smaller than its square root. 

## Solution
The solution provided optimizes the prime check by iterating only up to the square root of the input number.