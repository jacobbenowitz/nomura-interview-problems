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
  if (n === 1) return [1]; // basecase 1
  if (n === 2) return [1, 1]; // basecase 2
  const arr = fib(n - 1);     // create initial array
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  // recursive step pushing return value of the sum of prev to numbers in the sequence
  return arr; // return array after the entire call stack evaluates
}

console.log(fib(1))   // => expected: [1]
console.log(fib(2))   // => expected: [1, 1]
console.log(fib(3))   // => expected: [1, 1, 2]
console.log(fib(10))  // => expected: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]