/**
 * Only works on sorted arrays
 */

// use a generic
export function binarySearch<T>(array: T[], value: T) {
  let leftPtr = 0;
  let rightPtr = array.length - 1;
  let middlePtr = Math.floor((leftPtr + rightPtr) / 2);

  while (leftPtr <= rightPtr) {
    if (array[middlePtr] === value) {
      return middlePtr;
    } else if (array[middlePtr] < value) {
      leftPtr = middlePtr + 1;
    } else {
      rightPtr = middlePtr - 1;
    }
    middlePtr = Math.floor((leftPtr + rightPtr) / 2);
  }
  return -1;
}

console.log(binarySearch([1, 4, 7, 12, 18, 22, 23], 12));
