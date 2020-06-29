/**
 * Given two strings as input, discover if second is anagram of first
 */

export function validAnagram(string1: string, string2: string) {
  const frequencyCounter: { [key: string]: number } = {};

  for (let char of string1.split("")) {
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
  }

  for (let char of string2.split("")) {
    frequencyCounter[char] = (frequencyCounter[char] || 0) - 1;
  }

  return !Object.values(frequencyCounter).some((val) => val !== 0);
}

/**
 * Accept a sorted array and count the unique values in the array
 */
export function countUniqueValues(arr: number[]) {
  if (!arr.length) {
    return 0;
  }
  
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    // ahh, that's why we sort it
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2;
console.log(countUniqueValues([])); // 0;
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4;
console.log(countUniqueValues([1, 2, 3, 4, 5, 6, 7, 6, 6, 7])); // 7;
