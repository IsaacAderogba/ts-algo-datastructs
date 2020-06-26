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

console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("awesome", "awesom")); // false
