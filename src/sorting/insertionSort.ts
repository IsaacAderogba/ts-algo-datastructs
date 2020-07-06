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

export function guidedInsertionSort(array: number[]) {
  for (let i = 1; i < array.length; i++) {
    // variable to keep track of what number we're looking at
    let currentVal = array[i];

    // now we create another loop for the purpose of going backwards
    for (var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
      array[j + 1] = array[j];
    }

    array[j + 1] = currentVal;
  }

  return array;
}

console.log(guidedInsertionSort([3, 44, 38, 5, 47, 15]));
