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
