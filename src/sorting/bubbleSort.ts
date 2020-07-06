export function bubbleSort(arr: number[], direction: "asc" | "desc" = "asc") {
  arr.forEach(() => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (direction === "asc" ? arr[i] > arr[i + 1] : arr[i] < arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  });

  return arr;
}

console.log(bubbleSort([5, 3, 4, 1, 2], "desc"));
/**
 * For the last time through, did we make any swaps?
 * If the answer is no, then we're actually done.
 */
export function guidedBubbleSort(arr: number[]) {
  let noSwaps = true;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      noSwaps = false;
    }
    if (noSwaps) break;
  }
}
