/**
 * Accepts two strings, checks whether the characters in first
 * string form a subsequence of characters in the second
 */

function isSubsequence(string1: string, string2: string) {
  let string1Pointer = 0;

  for (let char of string2) {
    if (string1[string1Pointer] === char) {
      if (string1Pointer === string1.length - 1) return true;
      string1Pointer++;
    }
  }

  return false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "string")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false
