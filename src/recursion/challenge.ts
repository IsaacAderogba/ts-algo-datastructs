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
