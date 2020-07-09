/**
 * Group of algorithms that don't make direct comparisons.
 * So how the heck does it work. Works with numbers
 * - Info about size is encoded in its number of digits
 * - Do 1 digit numbers first (look at first digit in right side)
 */

// divide by 100s place, divide, and then mod 10
function getDigit(num: number, i: number) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num: number) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums: number[]) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums: number[]) {
  const maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets: number[][] = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }

    let array: number[] = [];
    nums = array.concat(...digitBuckets);
  }
  
  return nums;
}
