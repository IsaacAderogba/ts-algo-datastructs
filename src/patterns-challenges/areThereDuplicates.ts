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

/**
 Guided
 function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
  }

  works because they're sorted
  ---
  function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
 */
