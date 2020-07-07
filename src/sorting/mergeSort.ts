/**
 * The algorithms we have don't scale well
 * splitting, merging, sorting
 *
 * split up larger array into smaller subarrays
 * Merging two sorted arrays is simples - jesus
 *
 * We need to write a function to merge two sorted arrays
 */

function merge(arr1: number[], arr2: number[]) {
  let arrayToReturn: number[] = [];
  let leftArrPtr = 0;
  let rightArrPtr = 0;

  while (leftArrPtr < arr1.length || rightArrPtr < arr2.length) {
    if (arr1[leftArrPtr] <= arr2[rightArrPtr]) {
      arrayToReturn.push(arr1[leftArrPtr]);
      leftArrPtr++;
    } else {
      arrayToReturn.push(arr2[rightArrPtr]);
      rightArrPtr++;
    }
  }

  return arrayToReturn;
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]));
