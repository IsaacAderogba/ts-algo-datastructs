export function insertionSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j > -1; j--) {
      if (array[j + 1] < array[j]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(insertionSort([3, 44, 38, 5, 47, 15]));
