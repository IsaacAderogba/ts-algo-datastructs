/**
 * Accepts an array of integers and a number, and finds the maximum
 * sum of a subarray with the length of the number passed to the function
 */

function maxSubarraySum(array: number[], window: number) {
  if (!array.length || array.length < window) return null;

  let tempSum = array.slice(0, window).reduce((prev, curr) => prev + curr, 0);
  let maxSum = tempSum;

  for (let i = window; i < array.length; i++) {
    tempSum = tempSum - array[i - window] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 3)); // 4
console.log(maxSubarraySum([2, 3], 3)); // null
