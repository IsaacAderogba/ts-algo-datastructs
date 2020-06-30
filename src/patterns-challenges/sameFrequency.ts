/**
 * Given two positive integers, find out if the two numbers
 * have the same frequency of digits
 *
 * Frequency counter pattern
 */

export function sameFrequency(num1: number, num2: number) {
  let frequencyCounter: { [key: string]: number } = {};

  Array.from(String(num1)).forEach((num) => {
    frequencyCounter[num] = (frequencyCounter[num] | 0) + 1;
  });

  Array.from(String(num2)).forEach((num) => {
    frequencyCounter[num] = (frequencyCounter[num] | 0) - 1;
  });

  const isNonZeroValue = Object.values(frequencyCounter).some(
    (num) => num !== 0
  );

  return !isNonZeroValue;
}

console.log(sameFrequency(1822, 2281)); // true
console.log(sameFrequency(34, 14)); // false
