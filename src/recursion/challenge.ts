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

console.log(productOfArray([1, 2, 3, 10])); // 6