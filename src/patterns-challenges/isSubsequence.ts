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

/**
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
 */