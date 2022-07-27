// Prompt: Given an integer n, return the first n number of the Fib sequence.

// Strategy: Recursive func that 
// We know the first two numbers in the fib sequence are 1, 1. This is the basecase.
// The recursive step will be calling the func twice and adding the sum of the return value together for the next number
// Example: n === 3
// Basecase: n === 1 || n === 2  => [1, 1] (first two)
// Recursive step: fib(n-1) + fib(n-2) 
//                 fib(2) + fib(1)
// Answer:         1 + 1 = 2  =>  [1, 1, 2] 

const fib = (n) => {
  if (n === 1) return 1; // basecase 1
  if (n === 2) return 1; // basecase 2
  return fib(n - 1) + fib(n - 2);
}

console.log(10)