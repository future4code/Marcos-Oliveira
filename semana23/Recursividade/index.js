// EXERCÍCIO 1
/*const num = (n: number): void => {
    if (n >= 0) {
        num(n - 1);
        console.log(n);
    }
};
  
console.log(num(10));

const num = (n: number): void => {
    if (n >= 0) {
        console.log(n);
        num(n - 1);
    }
};
  
console.log(num(10));

// EXERCÍCIO 2
const calculateSum = (n1: number, n2: number = 0): number => {
    if (n1 === 0) {
      return n2;
    }
    return calculateSum(n1 - 1, n2 + n1);
};
  
console.log(calculateSum(5));

// EXERCÍCIO 3
const printArray = (array: number[], i: number = array.length - 1): void => {
    if (i >= 0) {
      printArray(array, i - 1);
      console.log(array[i]);
    }
};

console.log(printArray([1,2,3,4,5]))

// EXERCÍCIO 4
const numberOfDigits = (num: number, count: number = 1): number => {
    if (num < 10) {
      return count;
    }
    return numberOfDigits(num / 10, count + 1);
};
  
console.log(numberOfDigits(5698));*/
// EXERCÍCIO 5
var getLargerNumber = function (array, i, largest) {
    if (i === void 0) { i = 0; }
    if (largest === void 0) { largest = 0; }
    var largestAux = largest;
    if (array[i] > largest) {
        largestAux = array[i];
    }
    if (i === array.length - 1) {
        return largestAux;
    }
    return getLargerNumber(array, i + 1, largestAux);
};
console.log(getLargerNumber([5, 9, 77, 50, 3]));
