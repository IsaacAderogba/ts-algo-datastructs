/**
 * Two parts:
 * - Base Case
 * - Different Input
 */

export function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

export {};
