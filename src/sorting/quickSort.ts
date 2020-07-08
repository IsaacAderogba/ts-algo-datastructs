/**
 * Works on same assumption as merge sort
 * Breaks into 0 1 and length arrays
 * Move all numbers lower to left
 * [5, 2, 1, 8, 4, 7, 6, 3]
 * [3, 2, 1, 4, 5, 7, 6, 8] // 5 is in the correct spot...etc etc etc
 *
 * count and then leapfrog 11
 *
 * Designates an element as the pivot point
 * Order of elements doesn't matter, just move smaller to left, larger to right
 * We'll just always choose the first element
 */

function swap(array: number[], i: number, j: number) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

export function pivot(arr: number[], start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++; // one thing less than our pivot
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
}

pivot([4, 8, 2, 1, 5, 7, 6, 3]);

/**
 * Takes first item, returns index - call quick sort on left and right side of pivot point
 * call up until but not including the pivot
 * recursively call on subarray to the left of the index, and subarrays to the right
 * base case is checking the sub array
 */

export function quickSort(arr: number[], left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    // don't include the pivot
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
