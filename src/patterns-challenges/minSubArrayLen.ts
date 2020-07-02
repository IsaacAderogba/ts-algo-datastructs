/**
 * Accepts an array of positive integers and a positive integer.
 *
 * Returns the minimal length of a contiguous subarray of which the
 * sum is greater than or equal to the integer.
 */

function minSubArrayLen(nums: number[], sum: number) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if total is less than sum and not at the end
    // add the current num to the total,push up end
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;

      // otherwise if the total is equal or greater than sum
      //see if we can shrink the window
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;

      // current total less than required total, but we
      // reached the end. Needed to avoid infinite loop
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 because [4, 3]
console.log(minSubArrayLen([2, 3, 62, 2, 4, 3], 52)); // 1 because [62]
console.log(minSubArrayLen([2, 3, 62, 2, 4, 3], 92)); // 0 because none
