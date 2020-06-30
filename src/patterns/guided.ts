/**
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the array
 * has it's corresponding value squared in the second array.
 * The frequency of values must also be the same.
 */

/**
 * 1. Understand the problem
 * ---
 * Accept two arrays as inputs, return true if every value in
 * one of the arrays (let's say array 1) has a corresponding squared
 * value in the second array. Frequency must also be the same
 */

/**
 * 2. Concrete examples
 * same([1, 2, 1], [1, 1, 4]) would return true
 * same([3, 5, 6], [9, 25, 25]) would return false
 * same([1, 1, 4], [1, 2, 1]) would return true
 *
 * Make no assumptions of which argument order.
 * Meaning the answer might be, given the second argument as the one we'll
 * square, the answer is true. Given the first argument as the one we'll square,
 * the answer is true.
 */

/**
 * 3. Break it down
 * Create empty object called frequencyCounter
 *
 * Okay, instead of equating it in a roundabout way, I'll just add it up
 * Create var frequencyCounter for arr1
 * Count how many times number in arr1 shows up
 * Decrement the number by 1 whenever there is a match.
 */

/**
 * 4. Solve
 */
export function same(arr1: number[], arr2: number[]) {
  const frequencyCounter: { [key: number]: number } = {};

  arr1.forEach((number) => {
    if (frequencyCounter.hasOwnProperty(number)) {
      frequencyCounter[number] += 1;
    } else {
      frequencyCounter[number] = 1;
    }
  });

  arr2.forEach((number) => {
    const rootNumber = Math.sqrt(number);
    if (frequencyCounter.hasOwnProperty(rootNumber)) {
      frequencyCounter[rootNumber] -= 1;
    }
  });

  return !Object.values(frequencyCounter).some((value) => value !== 0);
}

/**
 * 5. Refactor, edge cases and so on
 */

export function sameGuided(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const frequencyCounter1: { [key: number]: number } = {};
  const frequencyCounter2: { [key: number]: number } = {};

  [arr1, arr2].forEach((arr, idx) => {
    for (let val of arr) {
      const freqCounter = idx === 0 ? frequencyCounter1 : frequencyCounter2;
      freqCounter[val] = (freqCounter[val] || 0) + 1;
    }
  });

  for (let key in frequencyCounter1) {
    const num = parseInt(key);

    // checks if the key is present
    if (!(num ** 2 in frequencyCounter2)) {
      return false;
    }

    // checks if the value matches
    if (frequencyCounter2[num ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

/**
 * Multiple Pointers pattern
 * ---
 * Create pointers or values that correspond to an index or position,
 * and then move towards the beginning, end or middle based on a certain
 * condition.
 *
 * Very efficient for solving problems with minimal space complexity
 */

/**
 * Takes a sorted array of integers, and returns the first pair where sum is 0
 */

export function sumZero(arr: number[]) {
  if (!arr.length) {
    return;
  }

  // create pointer for start and for end
  let startPointer = arr[0];
  let endPointer = arr[arr.length - 1];
  let halfwayPoint = Math.ceil(arr.length / 2);

  // increment start pointer by 1, decrement end pointer by 1 until meet past middle
  for (let i = 0; i < halfwayPoint; i++) {
    const leftSide = arr[startPointer];
    const rightSide = arr[endPointer];

    if (leftSide + rightSide === 0) {
      return [leftSide, rightSide];
    }

    startPointer++;
    endPointer++;
  }
}

/**
 * Ahh, move one pointer, not both of them, so there's a condition
 * to decide which pointer is the one that moves
 */
export function sumZeroGuided(arr: number[]) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

/**
 * Sliding Window Pattern
 * ---
 * Create Window which could be single variable or which could be a sub array.
 * Depending on the condition, the window either increases or closes
 *
 * Accept an array of integers and a number n, calculate the max sum of n
 * consecutive elements in the array
 */

export function maxSubarraySum(arr: number[], num: number) {
  if (!arr.length) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  console.log(maxSum);
  return maxSum;
}

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 10
maxSubarraySum([], 4); // null

/**
 * Divide and Conquer Pattern
 * ---
 * Dividing a data set into smaller chunks and then repeating
 * a process within that subset of data.
 *
 * Given a sorted array, return index where value passed to the function is located
 */

export function search(array: number[], val: number) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1
