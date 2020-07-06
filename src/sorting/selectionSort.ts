// pointer that goes up by 1

function selectionSort(array: number[]) {
  let min = 0;
  for (let i = 0; i < array.length - 1; i++) {

    for (let j = i + 1; j < array.length; j++) {      
      if (array[j] < array[min]) {
        min = j
      }
    }

    if (array[min] < array[i]) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }

  return array;
}

console.log(selectionSort([5, 3, 4, 1, 2, 7, 2]))