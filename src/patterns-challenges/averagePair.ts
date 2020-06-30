/**
 * Accepts a sorted array of integers and a target average, see if
 * there exists a pair of values in the array where the average of
 * that same pair equals the target average passed in
 */

function averagePair(array: number[], average: number) {
  if (!array.length) return false;

  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while (leftPointer < rightPointer) {
    const pairedAverage = (array[leftPointer] + array[rightPointer]) / 2;

    if (pairedAverage === average) {
      return true;
    } else if (pairedAverage > average) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 7)); // false
