/**
 * Only works on sorted arrays
 */

// use a generic
export function binarySearch<T>(array: T[], value: T) {
  let leftPtr = 0;
  let rightPtr = array.length - 1;

  while (leftPtr <= rightPtr) {
    const middlePtr = Math.floor((leftPtr + rightPtr) / 2);

    if (array[middlePtr] === value) {
      return middlePtr;
    } else if (array[middlePtr] < value) {
      leftPtr = middlePtr + 1;
    } else {
      rightPtr = middlePtr - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 4, 7, 12, 18, 22, 23], 12));
