/**
 * Accepts a variable number of arguments, and checks whether there
 * are duplicates among them
 */

function areThereDuplicates(...args: any[]) {
  let frequencyCounter: { [key: string]: number } = {};

  for (let i = 0; i < args.length; i++) {
    let value = args[i];
    frequencyCounter[value] = (frequencyCounter[value] || 0) + 1;

    if (frequencyCounter[value] === 2) {
      return true;
    }
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
