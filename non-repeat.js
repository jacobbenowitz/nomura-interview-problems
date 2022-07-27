// Find the first non-repeating character in a string
// case: str = "management"

// Iteration with pointers for current idx and current char
// Strategy
// 1. init pointers
// 2. iterate through strs, compare to pointers
// NEED nested iteration, n^2 complexity
// 3. if repeat, reset with next
// 4. otherwise, continue
// 5. return idx or none 

// OR create hashMap with key = char and value = [idx where char appears]

const nonRepeatChar = (str) => {
  console.log(`Input string: ${str}`)
  const chars = {}

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // if char is not in hash, add char pointing to an array initiated with the index of char
    if (!chars[char]) {
      chars[char] = [i]
    } else {
      chars[char].push(i) // push i into array
    }
  }
  // iterate through chars hash, searching for first value of length 1 
  // return that char
  for (const char in chars) {
    if (chars[char].length === 1) {
      return `The first non-repeating character is: ${char}.`;
    }
  }
  // if no non-repeating chars found
  return "No non-repeating characters found";
}

// time complexity: O(n) => two seperate loops worst case size of input string
// space complexity: O(n) => storing chars and indicies in hash based on input

console.log(nonRepeatChar("management")) // => expected: "g"
console.log(nonRepeatChar("potato")) // => expected: "p"
console.log(nonRepeatChar("lavalavalavalavalavalavalava")) // => expected: No repeating characters