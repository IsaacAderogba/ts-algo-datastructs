/**
 * Accepts a string a returns the length of the longest substring
 * with all distinct characters
 */

function findLongestSubstring(str: string) {
  let longest = 0;
  let seen: { [key: string]: number } = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginnging of substring + 1
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }

  return longest;
}

// console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 9
// console.log(findLongestSubstring("bbbbbb")); // 1
