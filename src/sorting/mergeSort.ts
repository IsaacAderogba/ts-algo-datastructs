/**
 * The algorithms we have don't scale well
 * splitting, merging, sorting
 *
 * split up larger array into smaller subarrays
 * Merging two sorted arrays is simples - jesus
 *
 * We need to write a function to merge two sorted arrays
 * 0 (n log n) is the best (so merge sort is the best)
 * Space complexity is not that great
 */

/**
  * 
  * @param arr1 function merge(arr1: number[], arr2: number[]) {
  let arrayToReturn: number[] = [];
  let leftArrPtr = 0;
  let rightArrPtr = 0;

  while (leftArrPtr < arr1.length || rightArrPtr < arr2.length) {
    if (arr1[leftArrPtr] < arr2[rightArrPtr]) {
      arrayToReturn.push(arr1[leftArrPtr]);
      leftArrPtr++;
    } else if (arr2[rightArrPtr] < arr1[leftArrPtr]) {
      arrayToReturn.push(arr2[rightArrPtr]);
      rightArrPtr++;
    } else {
      break;
    }
  }

  return arrayToReturn;
}
  */

function merge(arr1: number[], arr2: number[]) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

/**
 * slice up the array in halves, call mergeSort again and break each half again
 * Base case is when length is 1 or less than
 */

function mergeSort(arr: number[]) {
  let arrays: number[][] = [];

  function mergeHelper(arr: number[]) {
    if (arr.length <= 1) {
      arrays.push(arr);
      return;
    }

    const pivotPoint = Math.floor(arr.length / 2);
    const [slice1, slice2] = [
      arr.slice(0, pivotPoint),
      arr.slice(pivotPoint),
      arr.length - 1,
    ];

    mergeHelper(slice1);
    mergeHelper(slice2);
  }

  mergeHelper(arr);

  while (arrays.length > 1) {
    const arr1 = arrays.pop();
    const arr2 = arrays.pop();
    const mergedArray = merge(arr1 || [], arr2 || []);
    arrays.push(mergedArray);
  }
  return arrays.pop();
}

function mergeSort2(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort2(arr.slice(0, mid));
  let right = mergeSort2(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort2([5, 1, 29, 2, 45, 4, 13]));
