/**
 * Look at everything and see if it's what we want
 */

export function linearSearch(array: unknown[], value: unknown) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}

console.log(linearSearch([5, 8, 1, 100, 12, 3, 12], 12));
