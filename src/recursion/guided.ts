/**
 * Two parts:
 * - Base Case
 * - Different Input
 */

export function countDown(num: number) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

export function sumRange(num: number): number {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

export function iterativeFactorial(num: number) {
  let sum = 1;
  for (let i = num; i > 0; i--) {
    sum *= i;
  }
  return sum;
}

export function recursiveFactorial(num: number): number {
  if (num <= 1) {
    return 1;
  }
  return num * recursiveFactorial(num - 1);
}

/**
 * helperMethod recursion design pattern
 * - useful for when we're not doing straight computation
 */

export function collectOddValues(arr: number[]) {
  let result: number[] = []; // we need persistence (unless we manipulate inline)

  function helper(helperInput: number[]) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

export function pureCollectOddValues(arr: number[]) {
  let newArr: number[] = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(pureCollectOddValues(arr.slice(1)));
  return newArr;
}