/**
 * Given two positive integers, find out if the two numbers
 * have the same frequency of digits
 *
 * Frequency counter pattern
 */

export function sameFrequency(num1: number, num2: number) {
  let frequencyCounter: { [key: string]: number } = {};

  Array.from(String(num1)).forEach((num) => {
    frequencyCounter[num] = (frequencyCounter[num] | 0) + 1;
  });

  Array.from(String(num2)).forEach((num) => {
    frequencyCounter[num] = (frequencyCounter[num] | 0) - 1;
  });

  const isNonZeroValue = Object.values(frequencyCounter).some(
    (num) => num !== 0
  );

  return !isNonZeroValue;
}

console.log(sameFrequency(1822, 2281)); // true
console.log(sameFrequency(34, 14)); // false

/**
 * Guided solution
 * 
 * function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}
 */