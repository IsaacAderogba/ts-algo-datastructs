/**
 * Write a function called power which accepts a base and an exponent.
 * The function should return the power of the base to the exponent.
 */

export function power(base: number, exponent: number) {
  let count = exponent;

  function helper(count: number): number {
    if (count === 1) return base;
    return base * helper(count - 1);
  }

  return helper(count);
}

// console.log(power(2, 2)); // 4
// console.log(power(2, 4)); // 16
export function factorial(num: number): number {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

// console.log(factorial(7)); // 5040

export function productOfArray(arr: number[]): number {
  let count = arr.length - 1;

  function helper(count: number): number {
    if (count < 0) return 1;
    return arr[count] * helper(count - 1);
  }

  return helper(count);
}

/**
 * Write a function called recursiveRange which accepts a number
 * and adds up all the numbers from 0 to the number passed
 */

export function recursiveRange(num: number): number {
  if (num <= 0) return 0;
  return num + recursiveRange(num - 1);
}

/**
 * Write a recursive function called fib which accepts a number and
 * returns the nth number in the Fibonacci sequence
 */

export function fib(num: number): number {
  if (num <= 0 || num <= 2) {
    return 1;
  }

  return fib(num - 1) + fib(num - 2);
}

console.log(fib(5));
