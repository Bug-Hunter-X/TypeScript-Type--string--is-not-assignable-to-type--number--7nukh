function combine(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6]; //Corrected arr2

const combined = combine(arr1, arr2); //No Error

const arr3 = [1, 2, 3];
const arr4 = [4, 5, "6"]; // String element in arr2

const combined2 = arr3.concat(arr4.filter(isNumber));//Filter out non numbers
console.log(combined2); // [1, 2, 3, 4, 5]